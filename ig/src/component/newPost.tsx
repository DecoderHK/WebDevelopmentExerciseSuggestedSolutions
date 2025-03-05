import { useState } from "react";

export default function NewPost({ children }: { children: React.ReactNode }) {

    const [show, setShow] = useState(false);
    const [imagesB64, setImagesB64] = useState<string[]>([]);
    const [description, setDescription] = useState("");


    const handlePost = async () => {

        const current_timestamp = Date.now();

        await Promise.all(imagesB64.map(async (image, index) => {
            const fname = "image" + current_timestamp + "_" + index;
            const response1 = await fetch("/api/post/signedUrl?filename=" + fname, {
                method: "GET"
            });
            const data1 = await response1.json();
            const signedUrl = data1.url;

            await fetch(signedUrl, {
                method: "PUT",
                body: new Uint8Array(atob(image.split(',')[1]).split('').map(c => c.charCodeAt(0))),
                headers: {
                    "Content-Type": image.split(",")[0].split(":")[1].split(";")[0],
                },
            });
        }))



        // const response = await fetch("/api/post/create", {
        //     method: "POST",
        //     body: JSON.stringify({ description: description, image_urls: imagesB64 }),
        // });
        // console.log(response);
    }

    const image_styles = {
        width: "250px",
        height: "250px",
        backgroundColor: "#aaa",
        borderRadius: "10px",
        flex: "0 0 auto",
        fontSize: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
    }

    return (
        <>
            <div onClick={() => setShow(true)}>
                {children}
            </div>
            {show && (
                <div id="overlay_new_post" style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1000,
                    padding: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#333",
                }}>
                    <div
                        id="new_post_container"
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            padding: "20px",
                            maxWidth: "500px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            overflow: "auto",

                        }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                color: "#333",
                                flexShrink: 0,
                            }}
                        >
                            <h1>New Post</h1>
                            <button
                                style={{ background: "transparent", border: "none", fontSize: "20px", cursor: "pointer", color: "#333", padding: "10px" }}
                                onClick={() => setShow(false)}>
                                X
                            </button>
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            marginTop: "20px",
                            overflowX: "auto",
                            gap: "10px",
                            flexShrink: 0,
                        }}>


                            {imagesB64.map((image, index) => (
                                <div style={image_styles} key={index}>
                                    <img src={image} alt="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                            ))}

                            <div style={image_styles}
                                onClick={() => document.getElementById("file_input")?.click()}>

                                +

                                <input
                                    id="file_input"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            console.log("read file 1", file);
                                            const reader = new FileReader();
                                            reader.onload = (e) => {
                                                if (e.target?.result) {
                                                    setImagesB64([...imagesB64, e.target?.result as string]);
                                                }
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                            </div>



                        </div>

                        <div style={{
                            marginTop: "20px",
                            flexGrow: 1,
                            flexShrink: 0,
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            Description

                            <textarea
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    borderRadius: "4px",
                                    backgroundColor: "#f0f0f0",
                                    color: "#333",
                                    padding: "10px",
                                    border: "none",
                                    marginTop: "10px",
                                    flexGrow: 1,
                                    borderColor: "#333",
                                }}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                        }}>
                            <button style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                padding: "10px",
                                borderRadius: "4px",
                                width: "100%",
                                fontSize: "16px",
                                cursor: "pointer",
                                border: "none",
                            }} onClick={handlePost}>Post</button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
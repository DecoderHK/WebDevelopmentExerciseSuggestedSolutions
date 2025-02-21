import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { title, content } = await request.json();

    console.log(title, content);
    
    return NextResponse.json({ message: "Post created" });
}
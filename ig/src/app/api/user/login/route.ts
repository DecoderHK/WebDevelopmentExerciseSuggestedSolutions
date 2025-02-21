import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({ message: "Login successful" });
}

export async function POST(request: Request) {
    const { username, password } = await request.json();

    console.log(username, password);
    
    return NextResponse.json({ message: "Login successful" });
}
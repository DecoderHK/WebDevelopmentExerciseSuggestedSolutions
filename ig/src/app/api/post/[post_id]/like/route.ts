import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const { post_id } = await request.json();

    return NextResponse.json({ message: `Post ${post_id} liked` });
}
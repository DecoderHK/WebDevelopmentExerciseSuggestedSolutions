import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { post_id: string } }) {
    const { post_id } = params;

    return NextResponse.json({ message: `Post ${post_id}` });
}

export async function PUT(request: Request, { params }: { params: { post_id: string } }) {
    const { post_id } = params;

    return NextResponse.json({ message: `Post ${post_id} updated` });
}

export async function DELETE(request: Request, { params }: { params: { post_id: string } }) {
    const { post_id } = params;

    return NextResponse.json({ message: `Post ${post_id} deleted` });
}

import { NextResponse } from "next/server";
import { Post } from "@/db/schema";
import mongoose from "mongoose";

export async function POST(request: Request) {
    const { description, image_urls }: { description: string, image_urls: string[] } = await request.json();

    mongoose.connect(process.env.MONGO_URI!);

    const post = new Post({
        description,
        image_urls,
    });

    await post.save();
    
    return NextResponse.json({ message: "Post created", post });
}
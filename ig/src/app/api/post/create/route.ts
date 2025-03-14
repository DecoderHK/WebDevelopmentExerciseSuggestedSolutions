import { NextResponse } from "next/server";
import { Post } from "@/db/schema";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

interface DecodedToken {
    user_id: string;
}

export async function POST(request: Request) {

    // Extract user id from auth token

    const authToken = request.headers.get('Authorization') ?? "";

    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET as string);

    if (!decodedToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const user_id = (decodedToken as DecodedToken).user_id;

    if (!user_id) {
        return NextResponse.json({ error: "No user id." }, { status: 401 });
    }

    // Do the post creation


    const { description, image_urls }: { description: string, image_urls: string[] } = await request.json();

    mongoose.connect(process.env.MONGO_URI!);

    const post = new Post({
        description,
        image_urls,
        user_id: user_id,
    });

    await post.save();
    
    return NextResponse.json({ message: "Post created", post });
}
import { NextResponse } from "next/server";
import { Post } from "@/db/schema";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

interface DecodedToken {
    username: string | undefined;
    user_id: string | undefined;
}

export async function GET(request: Request) {

    const authToken = request.headers.get('Authorization') ?? "";

    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET as string);

    if (!decodedToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const user_id = (decodedToken as DecodedToken).user_id;

    if (!user_id) {
        return NextResponse.json({ error: "No user id." }, { status: 401 });
    }

    mongoose.connect(process.env.MONGO_URI as string);

    const posts = await Post.find({ user_id: user_id });

    return NextResponse.json({ posts: posts });
}


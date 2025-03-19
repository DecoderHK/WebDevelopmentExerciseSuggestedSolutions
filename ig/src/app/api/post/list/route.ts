import { NextRequest, NextResponse } from "next/server";
import { Post, User } from "@/db/schema";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

interface DecodedToken {
    username: string | undefined;
    user_id: string | undefined;
}

export async function GET(request: NextRequest) {

    mongoose.connect(process.env.MONGO_URI as string);

    const username = request.nextUrl.searchParams.get('username');

    let user_id: string | undefined;

    if (username) {

        const user = await User.findOne({ username: username });

        if (!user) {
            return NextResponse.json({ error: "User not found." }, { status: 404 });
        }

        user_id = user._id;

    } else {

        const authToken = request.headers.get('Authorization') ?? "";

        const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET as string);
    
        if (!decodedToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        
        user_id = (decodedToken as DecodedToken).user_id;
    
        if (!user_id) {
            return NextResponse.json({ error: "No user id." }, { status: 401 });
        }
    }

    if (!user_id) {
        return NextResponse.json({ error: "No user id." }, { status: 404 });
    }


    const posts = await Post.find({ user_id: user_id });

    return NextResponse.json({ posts: posts });
}


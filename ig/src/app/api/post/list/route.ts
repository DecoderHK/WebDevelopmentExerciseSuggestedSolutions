import { NextResponse } from "next/server";
import { Post } from "@/db/schema";
import mongoose from "mongoose";

export async function GET(request: Request) {

    mongoose.connect('mongodb+srv://admin:12341234@cluster0.8wyl7.mongodb.net/IG');

    const posts = await Post.find();

    posts.forEach(post => {
        console.log(post.n_likes);
    });

    return NextResponse.json({ posts: posts });
}
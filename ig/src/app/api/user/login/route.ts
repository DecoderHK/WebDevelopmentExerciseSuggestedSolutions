import { NextResponse } from "next/server";
import { User } from "@/db/schema";
import mongoose from "mongoose";
import crypto from "crypto";
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {

    mongoose.connect(process.env.MONGO_URI as string);

    const { username, password } = await request.json();

    const user = await User.findOne({ 
        "username": username, 
        "password": crypto.createHash('sha256').update(password.toString()).digest('hex')
    });

    if (!user) {
        return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
    }


    const token = jwt.sign({ username: username, user_id: user._id }, process.env.JWT_SECRET as string);

    return NextResponse.json({ message: "Login successful", token: token });
}
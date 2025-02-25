import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    id: Number,
    image: String,
    n_likes: Number,
    n_comment: Number,
});

const userSchema = new Schema({
    id: Number,
    username: String,
    password: String,
});

export const Post =  mongoose.model('post', postSchema);
export const User =  mongoose.model('user', userSchema);
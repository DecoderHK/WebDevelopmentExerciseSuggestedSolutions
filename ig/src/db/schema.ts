import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    id: Number,
    user_id: String,
    description: String,
    image_urls: [String],
    n_likes: Number,
    n_comment: Number,
});

const userSchema = new Schema({
    id: Number,
    username: String,
    password: String,
});

export const Post =  mongoose.models.post || mongoose.model('post', postSchema);
export const User =  mongoose.models.user || mongoose.model('user', userSchema);

import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    id: Number,
    image: String,
    n_likes: Number,
    n_comment: Number,
});

export const Post =  mongoose.model('post', postSchema);

import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true,
            default: 'Anonymous',
        },
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true },
)

const PostModel = mongoose.model('posts', PostSchema)

export default PostModel

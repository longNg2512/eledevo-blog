import PostModel from '../models/PostModel.js'

// @route GET /posts
// @desc GET posts
// @access Public
export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
        res.status(200).json({
            success: true,
            message: 'Get posts successfully!',
            posts,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
        })
    }
}

// @route POST /posts
// @desc Create posts
// @access Public
export const createPosts = async (req, res) => {
    try {
        const newPost = req.body
        const post = new PostModel(newPost)
        await post.save()
        res.status(201).json({
            success: true,
            message: 'Create post successfully!',
            post
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
        })
    }
}

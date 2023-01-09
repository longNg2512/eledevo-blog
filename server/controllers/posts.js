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
            post,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
        })
    }
}

// @route DELETE /posts
// @desc Delete post
// @access Public
export const deletePost = async (req, res) => {
    try {
        await PostModel.findByIdAndDelete(req.params.id)
        res.json({ success: true, message: 'Delete post successfully!' })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
        })
    }
}

// @route PUT /posts
// @desc Update post
// @access Public
export const updatePost = async (req, res) => {
    try {
        const id = req.params.id
        const { title, content, author } = req.body
        await PostModel.findByIdAndUpdate(id, { title, content, author })
        res.json({ success: true, message: 'Update post successfully!' })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
        })
    }
}

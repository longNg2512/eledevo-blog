import PostModel from '../models/PostModel.js'
import { unlink } from 'node:fs/promises'

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
        const { author, title, content } = req.body
        const image = []
        if (req.files) {
            req.files.forEach(element => {
                const imageUrl = `http://localhost:${process.env.PORT}/${element.filename}`
                image.push(imageUrl)
            })
        }
        const post = await PostModel.create({ author, title, content, image })
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
        const post = await PostModel.findByIdAndDelete(req.params.id)
        post.image.forEach(element => {
            unlink(`media/${element.slice(22)}`, error => {
                if (error) throw error
            })
        })
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
        const image = []
        if (req.files) {
            req.files.forEach(element => {
                const imageUrl = `http://localhost:${process.env.PORT}/${element.filename}`
                image.push(imageUrl)
            })
        }
        const oldPost = await PostModel.findById(id)
        if (image.length === 0) {
            await PostModel.findByIdAndUpdate(id, { title, content, author })
        } else {
            await PostModel.findByIdAndUpdate(id, {
                title,
                content,
                author,
                image,
            })
            oldPost.image.forEach(element => {
                unlink(`media/${element.slice(22)}`, error => {
                    if (error) throw error
                })
            })
        }
        res.json({ success: true, message: 'Update post successfully!' })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
        })
    }
}

// @route GET /posts/search
// @desc Search posts
// @access Public
export const searchPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({
            title: { $regex: req.query.textSearch, $options: 'i' },
        })
        res.json({ success: true, message: 'Search', posts })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error!',
        })
    }
}

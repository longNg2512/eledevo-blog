import express from 'express'
import * as postControllers from '../controllers/posts.js'
import upload from '../middleware/multer.js'

const router = express.Router()

// @route GET /posts
// @desc GET posts
// @access Public
router.get('/', upload, postControllers.getPosts)

// @route POST /posts
// @desc Create posts
// @access Public
router.post('/', upload, postControllers.createPosts)

// @route DELETE /posts
// @desc Delete post
// @access Public
router.delete('/:id', upload, postControllers.deletePost)

// @route PUT /posts
// @desc Update post
// @access Public
router.put('/:id', upload, postControllers.updatePost)

// @route GET /posts/search
// @desc Search posts
// @access Public
router.get('/search', upload, postControllers.searchPosts)

export default router

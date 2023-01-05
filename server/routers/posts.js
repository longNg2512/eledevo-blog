import express from 'express'
import * as postControllers from '../controllers/posts.js'

const router = express.Router()

// @route GET /posts
// @desc GET posts
// @access Public
router.get('/', postControllers.getPosts)

// @route POST /posts
// @desc Create posts
// @access Public
router.post('/', postControllers.createPosts)

export default router

// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Create a new blog post
router.post('/blogs', blogController.createBlog);

// Like a blog post
router.post('/blogs/:blogId/like', blogController.likeBlog);

// Comment on a blog post
router.post('/blogs/:blogId/comment', blogController.commentOnBlog);

module.exports = router;
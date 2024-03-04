import express from 'express';

import {
    addPost,
    deletePost,
    getPost,
    getPosts,
    updatePost,
  } from "../controller/posts.js";
  

const router = express.Router();

router.get("/", getPosts); // Get all posts
router.get("/:id", getPost); // Get a specific post by its ID
router.post("/", addPost); // Add a new post
router.delete("/:id", deletePost); // Delete a post by its ID
router.put("/:id", updatePost); // Update a post by its ID


export default router;
"use strict"

const {Post} = require("../model");

// @desc    Get Posts
// @route   GET /
// @access  Public
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({
            success: true,
            message: 'Successfully fetched posts',
            data: posts
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error fetching posts'
        });
    }
};
   
// @desc    Create Post
// @route   POST /
// @access  Public
const createPost = async (req, res) => {
    
    try {
        const newPost = await Post.create(req.body);
        res.status(201).send({success: true, message: 'Post Created', data: newPost });

    
    }
     catch (error) {
        res.send({ result: 500, error: error.message });
    
    }
}

// @desc    Delete a post
// @route   DELETE /delete
// @access  Public
const deletePost = async (req, res) => {
    
    try {
        const deletePost = await Post(req.body);
        res.status(201).send({success: true, message: 'Post Delete', data: deletePost}); 
    }
    catch (error) {
        res.send({ result: 500, error: error.message });
    }
}

// @desc    Update a single Post
// @route   PUT /update
// @access  Public
const updatePost = async (req, res) => {
    
    try {
        const updatePost = await Post(req.body);
        res.status(201).send({success: true, message: 'Post Update', data: updatePost}); 
    }
    catch (error) {
        res.send({ result: 500, error: error.message });
    }
}

const addLikes = async (data, res) => {
    let criteria = {_id:data.userId
    }
    let options = {
        lean: true,
        new: true
    }
    let dataToUpdate = {
        $inc: {
            likes: 1
        }
    }

    await Post.findOneAndUpdate(criteria, dataToUpdate, options).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}


const postController = {
    getPosts, createPost, deletePost, updatePost, addLikes
}
module.exports = postController


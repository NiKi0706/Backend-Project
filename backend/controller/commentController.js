"use strict"

const {Comment} = require("../model");

//desc    Get Comment
//route   GET /
//access  Public
const getComment = async(req, res) => {
    try {
        const comment = await Comment.find({});
        res.status(200).json({
            success: true,
            message: 'Successfully fetched posts',
            data: comment
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error fetching posts'
        });
    }
};

//desc    Create Comment
//route   POST /
//access  Public

const createComment = async(req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        res.status(201).send({success: true, message: 'Comment Created', data: newComment });

    
    }
     catch (error) {
        res.send({ result: 500, error: error.message });
    
    }
}

//desc    Update a single Comment
//route   PUT /update
//access  Public

const updateComment = async (req, res) => {
    
    try {
        const updateComment = await Comment(req.body);
        res.status(201).send({success: true, message: 'Comment Update', data: updateComment}); 
    }
    catch (error) {
        res.send({ result: 500, error: error.message });
    }
}

//desc    Delete a Comment
//route   DELETE /delete
//access  Public
const deleteComment = async (req, res) => {
    
    try {
        const deleteComment = await Comment(req.body);
        res.status(201).send({success: true, message: 'Comment Delete', data: deleteComment}); 
    }
    catch (error) {
        res.send({ result: 500, error: error.message });
    }
}

//module.exports = { getComment, createComment, updateComment, deleteComment}
const commentController = {
    getComment, createComment, updateComment, deleteComment
}
module.exports = commentController

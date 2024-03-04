
"use strict";
const { req } = require("good-logs");
const {User}= require("../model");

// @desc    Get Users
// @route   GET /
// @access  Public
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: 'Successfully fetched users',
            data: users
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error fetching users'
        });
    }
};

// @desc    Create User
// @route   USER /
// @access  Public
const createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).send({success: true, message: 'User Created', data: newUser }); 
    }
    catch (error) {
        res.send({ result: 500, error: error.message });
    }
}
    
// @desc    Delete a single User
// @route   DELETE/delete
// @access  Public
const deleteUser = async (req, res) => {
    
    try {
        const deleteUser = await User(req.body);
        res.status(201).send({success: true, message: 'User Deleted', data: deleteUser}); 
    }
    catch (error) {
        res.send({ result: 500, error: error.message });
    }
}

// @desc    Update a single User
// @route   PUT /update
// @access  Public
const updateUser = async (req, res) => {
    
    try {
        const updateUser = await User(req.body);
        res.status(201).send({success: true, message: 'User Update', data: updateUser}); 
    }
    catch (error) {
        res.send({ result: 500, error: error.message });
    }
}

module.exports = {
 getUsers, createUser, deleteUser, updateUser
}

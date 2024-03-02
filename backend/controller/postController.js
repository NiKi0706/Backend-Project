"use strict"

const {Post} = require("../model");

const getPosts = async (res) => {
    await Post.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const createPost = async (data, res) => {
    await Post.create(data).then(data => {

        const response = { success: true, message: 'Created Successfully', data }
        res.send({ result: 201, response });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const deletePost = async (data, res) => {
    await Post.destroy({ where: data }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const updatePost = async(data, res) => {
    await Post.update(data, { where: { id: data.id } }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const addLikes = async (data, res) => {
    let criteria = {_id:data.postId
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


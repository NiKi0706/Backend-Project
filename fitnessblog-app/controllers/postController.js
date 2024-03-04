"use strict";

import { Posts } from "../models";

const getPost = (res) => {
    Posts.find({}, {}, {}, (err, data) => {
        if (err) throw err;
        res.send({ result: 200, data: data })
    });
}

const createPost = (data, res) => {
    new Posts(data).save((err, data) => {
        if (err) throw err
        res.send({ result: 200, data: data })
    });
}

const addLikes = (data, res) => {
    let criteria = {
        _id: data.postId
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
    Posts.findOneAndUpdate(criteria, dataToUpdate, options, (err, data) => {
        if (err) throw err;
        res.send({ result: 200, data: data })
    });
}

export default {
    getPost, createPost, addLikes
}
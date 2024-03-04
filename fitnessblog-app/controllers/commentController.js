"use strict";
import { Post } from "../models/index.js"; //matches index.js

const getPosts = (res) => {
//finds all Posts
    Post.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const createPost = (data, res) => {
    //creates a new Post using JSON data POSTed in request body
    console.log(data)
    new Post(data).save()
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const updatePost = (req, res) => {
    console.log(req.body)
      Post.findByIdAndUpdate(req.params.id, req.body, {
  new: true })
      .then(data => res.send({result: 200, data: data}))
      .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
  }
  const deletePost = (req, res) => {
        Post.findByIdAndDelete(req.params.id)
      .then(data => res.send({result: 200, data: data}))
      .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
      })
  }

export default {
    getPosts, createPost, updatePost, deletePost
}
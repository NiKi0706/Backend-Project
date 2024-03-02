"use strict"

const {Comment} = require("../model");

const getComment = async(res) => {
   await Comment.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const createComment = async(data, res) => {
//    const apiData = {},
 //   await Comment.create(data)


}

const updateComment = async(data, res) => {
  await Comment.update(data, { where: { id: data.id } }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const deleteComment = async(data, res) => {
    await Comment.delete({ where: data }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

//module.exports = { getComment, createComment, updateComment, deleteComment}
const commentController = {
    getComment, createComment, updateComment, deleteComment
}
module.exports = commentController

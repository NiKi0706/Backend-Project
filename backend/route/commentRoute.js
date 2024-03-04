
const express = require('express')
const router = express.Router()
const {commentController} = require('../controller')

router.get('/', (req, res) => {
    commentController.getComment(req, res)
})

router.post('/create', (req, res) => {
    commentController.createComment(req, res)
})

router.delete('/delete', (req, res) => {
    commentController.deleteComment(req, res)
})

router.put('/update', (req, res) => {
    commentController.updateComment(req, res)
})


const commentRoute = router
module.exports = router
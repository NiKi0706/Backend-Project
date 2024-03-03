
const express = require('express')
const router = express.Router()
const {commentController} = require('../controller')

router.get('/', (req, res) => {
    commentController.getComment(req.body, res)
})

router.post('/', (req, res) => {
    commentController.addComment(req.body, res)
})

router.delete('/delete', (req, res) => {
    commentController.deleteComment(req.body, res)
})

router.put('/update', (req, res) => {
    commentController.updateComment(req.body, res)
})


const commentRoute = router
module.exports = router
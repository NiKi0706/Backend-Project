const express = require("express");
const router = express.Router();
const {postController} = require("../controller");

router.get('/', async (req, res) => {
    postController.getPosts(req, res);
})

router.post('/create', (req, res) => {
    postController.createPost(req, res)
})

router.delete('/delete', (req, res) => {
    postController.deletePost(req, res)
})  

router.put('/update', (req, res) => {
    postController.updatePost(req, res)
})


router.put('/addLikes', (req, res) => {
    postController.addLikes(req, res)
})

const postRoute = router;
module.exports = postRoute;
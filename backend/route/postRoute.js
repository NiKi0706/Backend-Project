const express = require("express");
const router = express.Router();
const {postController} = require("../controller");

router.get('/', (req, res) => {
    postController.getPosts(res);
})

router.post('/create', (req, res) => {
    postController.createPost(req.body, res)
})

router.delete('/delete', (req, res) => {
    postController.deletePost(req.body, res)
})  

router.put('/update', (req, res) => {
    postController.updatePost(req.body, res)
})


router.put('/addLikes', (req, res) => {
    postController.addLikes(req.body, res)
})

const postRoute = router;
module.exports = postRoute;
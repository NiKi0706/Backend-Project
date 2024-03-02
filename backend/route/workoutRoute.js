const express = require("express");
const router = express.Router();
const {workoutController} = require("../controller");

router.get('/', (req, res) => {
    workoutController.getAPIWorkout(res);
})

router.post('/migrate', (req, res) => {
    workoutController.migrateAPIWorkout(req, res);
})

router.post('/', (req, res) => {
    workoutController.createPost(req.body, res)
})

router.delete('/:workoutId', (req, res) => {
    workoutController.deletePost(req.body, res)
})  

router.put('/:workoutId', (req, res) => {
    workoutController.updatePost(req.body, res)
})


router.put('/addLikes', (req, res) => {
    workoutController.addLikes(req.body, res)
})


const workoutRoute = router;
module.exports = workoutRoute;
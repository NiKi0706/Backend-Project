const express = require("express");
const router = express.Router();
const {workoutController} = require("../controller");

router.get('/mock', (req, res) => {
    workoutController.getAPIWorkout(res);
})

router.get('/', (req, res) => {
    workoutController.getAllWorkout(req, res)
})


router.get('/:workoutId', (req, res) => {
    workoutController.getWorkout(req, res)
})


router.post('/', (req, res) => {
    workoutController.createWorkout(req, res)
})

router.put('/:workoutId', (req, res) => {
    workoutController.updateWorkout(req, res)
})

router.delete('/:workoutId', (req, res) => {
    workoutController.deleteWorkout(req, res)
})  


router.put('/addLikes', (req, res) => {
    workoutController.addLikes(req, res)
})


const workoutRoute = router;
module.exports = workoutRoute;
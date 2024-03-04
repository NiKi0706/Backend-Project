"use strict"
const goodlog = require('good-logs')
const axios = require('axios');
const {Workout} = require("../model");
const { KEY } = require("../constant");

/**
 * 
 * @path {baseUrl}/api/workout 
 */

// @desc    Get workout from API
// @route   GET /api/workout
// @access  Public
const getAPIWorkout = async (res) => {
    let options = {
        method: 'GET',
        url: process.env.API_URL,
        params: {muscle: 'biceps'},
        headers: {
            'X-RapidAPI-Key':  process.env.API_KEY,
            'X-RapidAPI-Host':  process.env.API_HOST
        }
      }; 

    try {
        const response = await axios.request(options);
        res.send({ result: 200, data: response.data });
    } catch (error) {
        console.error(error);
        res.send({ result: 500, error: error.message });
    }
}

// @desc    Get All Workouts
// @route   GET /
// @access  Public
const getAllWorkout = async(req, res) => {
    const workouts = await Workout.find()
    try {
        res.status(200).send({ success: true, message: 'All Workouts Fetched' ,data: workouts });
    } catch (error) {
        res.status(404).send({ result: 500, error: error.message });
    }
}


// @desc    Get a single Workout
// @route   GET /:workoutId
// @access  Public
const getWorkout = async(req, res) => {
    const workout = await Workout.findById(req.params.workoutId);
    try {
        if (!workout) {
            res.send({ result: 404, error: 'Workout doesn\'t exists' });
        }
        res.send({ result: 200, success: true, message: 'single Workout Fetched' ,data: workout });
    } catch (error) {
        res.send({ result: 500, error: error.message });
    }
  
}

// @desc    Create Workout
// @route   POST /
// @access  Public
const createWorkout = async (req, res) => {
    
    try {
        const workoutExists = await Workout.findOne({ name: req.body.name });

        if(workoutExists) {
            res.send({ result: 400, error: 'Workout already exists'});
        }

        const newWorkout = await Workout.create(req.body);  

        res.status(201).send({success: true, message: 'Workout Created', data: newWorkout });
    } catch (error) {
        res.send({ result: 500, error: error.message });
    
    }
}

// @desc    Update a single Workout
// @route   PUT /:workoutId
// @access  Public
const updateWorkout = async (req, res) => {
    const workout = await Workout.findById(req.params.workoutId)

   try {
        if (!workout) {
            res.send({ result: 404, error: 'Workout doesn\'t exists' });
        }

           /* workout.name = req.body.name
            workout.instructions = req.body.instructions
            workout.muscle = req.body.muscle
            workout.equipment = req.body.equipment
            workout.level = req.body.level
            workout.type = req.body.type */

        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.workoutId, req.body, {new: true, runValidators: true});


        res.status(200).send({success: true, message: 'Workout Updated', data: updatedWorkout });
   } catch (error) {
        res.send({ result: 500, error: error.message });
   }
}

// @desc    Delete a workout
// @route   DELETE /:workoutId
// @access  Public
const deleteWorkout = async (req, res) => {
   const workout = await Workout.findById(req.params.workoutId)
 
   try {
        if (!workout) {
            res.send({ result: 404, error: 'Workout doesn\'t exists' });
        }

        await workout.deleteOne();
        res.send({ result: 200, success: true, message: 'Workout Deleted' });
   } catch (error) {
        res.send({ result: 500, error: error.message });
   }

}

const workoutController = {
    getAPIWorkout, getAllWorkout, getWorkout, createWorkout, updateWorkout, deleteWorkout
}
module.exports = workoutController
"use strict"
const goodlog = require('good-logs')
const axios = require('axios');
//const { option } =require('../server')
const { GLOBAL } = require("../config");
const {Workout} = require("../model");
const { KEY } = require("../constant");



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

// @desc    Migrate workout from API
// @route   POST /api/workout/migrate
// @access  Public
const migrateAPIWorkout = async (req, res) => {
    let options = {
        method: 'GET',
        url: process.env.API_URL,
        params: {muscle: 'biceps'},
        headers: {
            'X-RapidAPI-Key':  process.env.API_KEY,
            'X-RapidAPI-Host':  process.env.API_HOST
        }
      }; 

    const apiData = await axios.request(options)
    console.log(apiData)


    res.status(201).json({ result: 201, data: apiData });
/*    const workout =  await Workout.create()

    Workout.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })*/
}


const getWorkout = async(res) => {
    await Workout.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const createWorkout = (data, res) => {


    Workout.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const deleteWorkout = (data, res) => {
    Workout.deleteWorkout({ where: data }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const updateWorkout = (data, res) => {
    Workout.update(data, { where: { id: data.id } }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const workoutController = {
    getAPIWorkout, migrateAPIWorkout, getWorkout, createWorkout, updateWorkout, deleteWorkout
}
module.exports = workoutController
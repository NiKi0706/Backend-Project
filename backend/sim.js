require('colors')
const fs = require('fs')
const { dbConnect } = require('./config')
const { Workout} = require('./model')
const { config } = require('dotenv')
config()

dbConnect()

const workouts = JSON.parse(fs.readFileSync(`${__dirname}/mock/biceps-workout.json`, 'utf-8'))


const migrateData = async () => {
    try {
        await Workout.deleteMany()
        await Workout.insertMany(workouts)
        console.log(' Data imported '.green.inverse)
        process.exit()
    } catch (error) {
        console.error(` ${error.message} `.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Workout.deleteMany()
        console.log(' Data destroyed '.red.inverse)
        process.exit()
    } catch (error) {
        console.error(` ${error.message} `.red.inverse)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    destroyData()
} else if (process.argv[2] === '-m') {
    migrateData()
}
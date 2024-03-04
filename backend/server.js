const express = require('express');
const dbConnect = require('./config/dbConnect')
const { LOG } = require('./constant')
const { GLOBAL } = require('./config')
const { userRoute, postRoute, workoutRoute, commentRoute  } = require("./route");
require("dotenv").config();
require('colors')

const app = express();
app.use(express.json());

//routes
app.get("/", (req, res) => {
   res.json({message: LOG.WELCOME_SERVER});
});


/*
app.post('/userController:id', (req, res) => {
console.log(req.body)
res,send(req.body)
})

app.get('/userController:id', (req, res) => {
   console.log(req.body)
   res,send(req.body)
   })


app.post('/postController', (req, res) => {
   console.log(req.body)
   res,send(req.body)
})

app.get('/postController', (req, res) => {
   console.log(req.body)

   res,send(req.body)
})


app.post('/commentController', (req, res) => {
   console.log(req.body)
   res,send(req.body)
})*/


app.use("/api/user", userRoute);
app.use("/api/comment", commentRoute);
app.use("/api/post", postRoute);
app.use("/api/workout", workoutRoute);

// options mounted for workout api request
exports.option = GLOBAL.API_OPTIONS(process.env, 'biceps')

app.listen(GLOBAL.PORT, () => {
   console.log(LOG.SERVER_STATUS(GLOBAL.PORT).bgGreen);
});


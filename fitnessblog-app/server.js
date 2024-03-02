
const dbConnect = require("./dConnect.js");

const express = require("express");
const app = express();
require("dotenv").config();

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "fitness app" });
});

let userRoutes = require('./routes/userRoutes.js');
app.use('/api/users', userRoutes);
// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// console.log('testing');
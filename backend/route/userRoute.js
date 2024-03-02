
const express = require("express");
const router = express.Router();
const {userController} = require("../controller");

// matches GET requests sent to /api/users 
// (the prefix from server.js)

router.get('/:id', (req, res) => {
 userController.getUsers(res);
})

// matches POST requests sent to /api/users/create
router.post('/:id', (req, res) => {
 userController.createUser(req.body, res)
})

// matches DELETE requests sent to /api/users/delete
router.delete('/:id', (req, res) => {
    userController.deleteUser(req.body, res)
    })
// matches PUT requests sent to /api/users/update
router.put('/:id', (req, res) => {
    userController.updateUser(req.body, res)
    })

const userRoute = router;
module.exports = userRoute;
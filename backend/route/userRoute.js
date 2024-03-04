
const express = require("express");
const router = express.Router();
const {userController} = require("../controller");

// matches GET requests sent to /api/user 
// (the prefix from server.js)
router.get('/', async (req, res) => {
    userController.getUsers(req, res);
})
// matches POST requests sent to /api/user/create

router.post('/create', (req, res) => {
 userController.createUser(req, res)
})
   
// matches DELETE requests sent to /api/user/delete
router.delete('/delete', (req, res) => {
    userController.deleteUser(req, res);
    })
// matches PUT requests sent to /api/user/update
router.put('/update', (req, res) => {
    userController.updateUser(req, res);
    })

const userRoute = router;
module.exports = userRoute;
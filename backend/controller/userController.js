
"use strict";
const {User}= require("../model");

// finds all users in DB, then sends array as response

const getUsers = async(res) => {
 await User.find({}).then(data => {
 res.send({result: 200 , data: data});
 }).catch(err => {
 console.log(err);
 res.send({ result: 500, error: err.message });
 })
}

// uses JSON from request body to create new user in DB
const createUser = async(data, res) => {
 await User.create(data).then(data => {
 res.send({ result: 200 , data: data});
 }).catch(err => {
 console.log(err);
 res.send({ result: 500, error: err.message });
 })
}

//uses JSON from request body to delete user in DB
const deleteUser = async(data, res) => {
 await User.destroy({where: data}).then(data => {
 res.send({ result: 200 , data: data});
 }).catch(err => {
 console.log(err);
 res.send({ result: 500, error: err.message });
 })
}

//uses JSON from request body to update user in DB
const updateUser = async(data, res) => {
 await User.update(data, {where: {id: data.id}}).then(data => {
 res.send({ result: 200 , data: data});
 }).catch(err => {
 console.log(err);
 res.send({ result: 500, error: err.message });
 })
}

module.exports = {
 getUsers, createUser, deleteUser, updateUser
}

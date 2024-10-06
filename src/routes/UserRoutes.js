/*const express = require("express");*/

const { Router } = require("express");
const router = Router();
const UserController = require("../controllers/UserController");

router.get("/users", UserController.index);

module.exports = routes
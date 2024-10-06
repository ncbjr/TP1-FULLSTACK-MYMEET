/*const express = require("express");*/

const { Router } = require("express");
const UserController = require("../controllers/UserController");
const userMiddleware = require('../middlewares/userMid');
const router = Router();

router.get('/users', userMiddleware, UserController.index);
router.post('/users/register', UserController.store);
router.post('/users/login', UserController.login);

module.exports = router;
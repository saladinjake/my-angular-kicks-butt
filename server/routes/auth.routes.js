const express = require("express");
const router = express.Router();

const AuthenticateMiddleware = require('../middlewares/authenticate');
const User = require('../models/user');

const UserController = require("../controllers/auth.controller")

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/users', AuthenticateMiddleware, UserController.getAllUsers)


module.exports=router;

const express = require("express");
const router = express.Router();

const authenticate = require('../middlewares/authenticate');
const User = require('../models/user');

const UserController = require("../controllers/auth.controller")

router.post('/register', UserController.register)

router.post('/login', UserController.login)

router.get('/users', authenticate, (req, res) => {
  User.find().then(rec => {
    res.status(200).json(rec)
  })
})


module.exports=router;

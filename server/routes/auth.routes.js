const express = require("express");
const router = express().Router;

const authenticate = require('../middlewares/authenticate');
const User = require('../models/user');


router.post('/register', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
  })
  newUser.password = newUser.generateHash(req.body.password);
  newUser.save().then(rec => {
    res.status(201).json(rec)
  })
})

router.post('/login', (req, res) => {
  User.findOne({email: req.body.email}).then(loginUser => {
    if(!loginUser) {
      return res.status(401).json({message: 'Invalid username or password'})
    }
    if(!loginUser.validatePassword(req.body.password)) {
      return res.status(401).json({message: 'Invalid username or password'})
    }
    const withTokem = {email: loginUser.email, _id: loginUser._id};
    withTokem.token = loginUser.generateJWT();
    res.status(200).json(withTokem)
  })
})

router.get('/users', authenticate, (req, res) => {
  User.find().then(rec => {
    res.status(200).json(rec)
  })
})


module.exports=router;

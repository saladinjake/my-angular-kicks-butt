const express = require("express");
const router = express.Router();
const { io } = require('../app');
const Message = require('../models/message');


io.on('connection', (socket) => {
  let user = '';

  socket.on('new message', (data) => {
    const newMessage = new Message({
      _id: mongoose.Types.ObjectId(),
      message: data,
      user: user
    })
    newMessage.save().then(rec => {
      if(rec) {
        io.emit('message recieved', rec)
      } else {
      }
    })
  })
  socket.on('new user', (data) => {
    user = data;
    console.log("new user connected")
    socket.broadcast.emit('user connected', data);
    Message.find().then(rec => {
      if(rec) {
        socket.emit('all messages', rec)
      } else {
      }
    })
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user disconnected', user);
  })
})

const Message = require('./models/message')
app.get('/chat', (req, res) => {
  Message.find().then(rec => {
    if(rec) {
      res.send(rec)
    } else {
      res.send([])
    }
  })
})
app.post('/chat', (req, res) => {
  const newMessage = new Message({
    _id: mongoose.Types.ObjectId(),
    message: req.body.message,
    user: 'user'
  })
  newMessage.save().then(rec => {
    if(rec) {
      res.send(rec)
    } else {
      res.send([])
    }
  })
})

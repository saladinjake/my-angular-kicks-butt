const config = require('./config/config');

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const mongoose = require("mongoose");

const server = require('http').Server(app)
const io = require('socket.io')(server)

const authRoutes = require("../routes/auth.routes")
const chatRoutes = require("../routes/chat.routes")

const PORT  = process.env.PORT  || 3000;
const IP = process.env.IP || 127.0.0.1;

mongoose.Promise = global.Promise;
mongoose.connect(
  config.mongoURL,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')))
app.use(authRoutes)
app.use(chatRoutes)


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

server.listen(3000, () => console.log("Listening on port 3000..."));

module.exports= { app, io };

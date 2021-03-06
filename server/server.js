const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../dist/interMatch');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>{
    socket.on('message',(message)=>{
      console.log('socket works',message);
    });
});

server.listen(port , ()=> console.log('Server started on', port));

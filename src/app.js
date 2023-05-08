const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const {PORT} = require('./config/index');

app.use('/',express.static( __dirname+"/public"));

io.on("connection",(socket)=> {
    console.log("a user is connected  "+socket.id)
});


const setUpAndStart =() => {
    
   

    server.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    })
}
setUpAndStart();
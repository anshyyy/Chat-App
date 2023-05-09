const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const api = require('./routes/index');
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const {PORT} = require('./config/index');
app.use("/",api);
app.use('/',express.static( __dirname+"/public"));

io.on("connection",(socket)=> {
    console.log("a user is connected  "+socket.id);
    socket.on('msg_send', (data) => {
        console.log(data);
        // io.emit('msg_rcvd', data);
        // socket.emit('msg_rcvd', data)
        socket.broadcast.emit('msg_rcvd', data)
    })
});


const setUpAndStart =async() => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use("/api",api);

    server.listen(PORT, async()=>{
       
        console.log(`server started at ${PORT}`);
      
    })
}
setUpAndStart();
const express = require('express');

const api = require('./routes/index');
const bodyParser = require("body-parser");
const User = require("../src/models/user");
const ChatRepo = require("./repository/chatRepo")
const chatRepo = new ChatRepo();
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const {PORT} = require('./config/index');
const path = require("path");


app.set('view engine', 'ejs');
app.set('views', __dirname+ "/views");
app.use(express.static(__dirname+'/public'));

app.use("/",api);

const usp = io.of("/user-namespace");
usp.on("connection",async function(socket){
    console.log("user connected");
    let username = socket.handshake.auth.token;

    socket.broadcast.emit("getOnlineUser",{username:username});



    console.log(username);
    const user = await User.update({isOnline:"1"}, {where : {
        username : username
    }});
    console.log(user);
    socket.on("disconnect",async function(){
        console.log("User Disconnected");
        socket.broadcast.emit("getOfflineUser",{username:username});
        const user = await User.update({isOnline:"0"}, {where : {
            username : username
        }});
    })

    socket.on("newChat",function(data){
        socket.broadcast.emit("loadNewChat",data);
     });
     
     socket.on("existsChat",async function(data){
        console.log(data);
         const oldChats =await chatRepo.getChat(data.sender,data.receiver);
         console.log(oldChats);
         socket.emit("loadOldChats",{chats:oldChats});

     });


})

const setUpAndStart =async() => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use("/api",api);

    http.listen(3000, async()=>{
       
        console.log(`server started at ${PORT}`);
      
    })
}
setUpAndStart();
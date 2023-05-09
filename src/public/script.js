



btn.onclick = function exec() {
    socket.emit('msg_send', {
        msg: inputMsg.value
    });
}

const gbutton = document.getElementById('gbtn');

gbutton.addEventListener("click",function (){
    console.log("hello");
})

socket.on('msg_rcvd', (data) => {
    let limsg = document.createElement('li');
    limsg.innerText = data.msg;
    msgList.appendChild(limsg);
})
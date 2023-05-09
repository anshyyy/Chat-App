var socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msglist');
const signInWithGoogleButton = document.getElementById('signInWithGoogle');



btn.onclick = function exec() {
    socket.emit('msg_send', {
        msg: inputMsg.value
    });
}

const signInWithGoogle = async() => {
    console.log("Hello");
   const googleProvider = new firebase.auth.GoogleAuthProvider();
   auth.signInWithPopup(googleProvider)
  .then(() => {
    window.location.assign('./profile');
  })
  .catch(error => {
    console.error(error);
  })
  
  }

signInWithGoogleButton.addEventListener('click', signInWithGoogle);
socket.on('msg_rcvd', (data) => {
    let limsg = document.createElement('li');
    limsg.innerText = data.msg;
    msgList.appendChild(limsg);
})
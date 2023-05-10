var firebaseConfig = {
  apiKey: "AIzaSyAVp1Pgb-x1eEdqT8L5Mu3s0_j1trZONUo",
  authDomain: "chat-app-16233.firebaseapp.com",
  projectId: "chat-app-16233",
  storageBucket: "chat-app-16233.appspot.com",
  messagingSenderId: "435432293396",
  appId: "1:435432293396:web:a9fae305343e9a34bd5301",
  measurementId: "G-Z1EHJTZRM3"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google Sign-In provider
var provider = new firebase.auth.GoogleAuthProvider();

// Sign in with Google function
function signInWithGoogle() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Handle successful sign-in here
      console.log({
        username: result.user.email.split("@")[0],
        email: result.user.email,
      });
      localStorage.setItem('name',JSON.stringify(result.user.email.split("@")[0]));
      axios
        .post("http://localhost:3000/api/user", {
          username: result.user.email.split("@")[0],
          email: result.user.email,
        })
        .then(() => {
          console.log("Done"),
          window.location.assign(`/dashboard/?${ result.user.email.split("@")[0]}`);
        })
        .catch((err) => console.log("error", err));
    })
    .catch((error) => {
      // Handle errors here
      console.log(error);
    });
}

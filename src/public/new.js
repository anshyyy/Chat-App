var firebaseConfig = {
  apiKey: "AIzaSyApne7o2ypaHsxeyyytC_nhSDhlVA9vL6Y",
  authDomain: "chat-app-13be5.firebaseapp.com",
  projectId: "chat-app-13be5",
  storageBucket: "chat-app-13be5.appspot.com",
  messagingSenderId: "775615398291",
  appId: "1:775615398291:web:a235c640553e9e7d4fa866",
  measurementId: "G-MK3KN7HX99",
};
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

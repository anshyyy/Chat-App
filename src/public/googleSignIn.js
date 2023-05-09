  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyApne7o2ypaHsxeyyytC_nhSDhlVA9vL6Y",
    authDomain: "chat-app-13be5.firebaseapp.com",
    projectId: "chat-app-13be5",
    storageBucket: "chat-app-13be5.appspot.com",
    messagingSenderId: "775615398291",
    appId: "1:775615398291:web:a235c640553e9e7d4fa866",
    measurementId: "G-MK3KN7HX99"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

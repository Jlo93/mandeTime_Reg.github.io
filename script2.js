// Your JavaScript code here

console.log("IN JS!!");

//import { getAuth, createUserWithEmailAndPassword } from "firebase/compat/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/compat/auth";
import { getDatabase, ref, set } from "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyB1aP2HtjGQv4UXKj94fSciGaWayaEivvo",
  authDomain: "mandetimebook.firebaseapp.com",
  databaseURL: "https://mandetimebook-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mandetimebook",
  storageBucket: "mandetimebook.appspot.com",
  messagingSenderId: "137699696644",
  appId: "1:137699696644:web:46f922af06a86db994d551",
  measurementId: "G-HQ0J2H2P8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

console.log("HERE!!");


firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

document.getElementById("btn1").addEventListener("click", function () {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Register user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User registered:", user);

      // Store additional user information in the database
      const userId = user.uid;
      const userRef = ref(database, `users/${userId}`);
      set(userRef, {
        fullName: fullName,
        email: email,
      });

      alert("User registered successfully!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Registration error:", errorCode, errorMessage);
      alert("Registration failed. Please try again.");
    });
});







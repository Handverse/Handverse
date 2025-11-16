

var firebaseConfig = {
  apiKey: "AIzaSyB550kjhLpnfoz3i4J-Cas190wAgtzjobY",
  projectId: "handverse2024",
  databaseURL: "https://handverse2024-default-rtdb.firebaseio.com",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


// -----------------Esconder com variaveis de ambiente--------------


// const express = require("express");
// const firebase = require("firebase/app");
// require('firebase/database');

// const app = express();
// const port = process.env.PORT || 3000;

// firebase.initializeApp({
//   apiKey: process.env.FIREBASE_API_KEY,
//   projectId: process.env.FIREBASE_PROJECT_ID
// });


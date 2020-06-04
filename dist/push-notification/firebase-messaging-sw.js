importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBgNHZVOvWt7SbpViblgyCNzYX2GfDzO0U",
    authDomain: "my-notifications-5498e.firebaseapp.com",
    databaseURL: "https://my-notifications-5498e.firebaseio.com",
    projectId: "my-notifications-5498e",
    storageBucket: "my-notifications-5498e.appspot.com",
    messagingSenderId: "253961749955",
    appId: "1:253961749955:web:5400e70e025ed81ad26976",
    measurementId: "G-39FN97PFQX"
  });
const messaging = firebase.messaging();
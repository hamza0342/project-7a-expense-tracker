importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyABGTo4STTnujEG3R4N4wHr6GcKQdu1wnE",
    authDomain: "expense-tracker-30489.firebaseapp.com",
    projectId: "expense-tracker-30489",
    storageBucket: "expense-tracker-30489.appspot.com",
    messagingSenderId: "487505639801",
    appId: "1:487505639801:web:b18fc70902945f2fd3d7a8"
  }; 

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
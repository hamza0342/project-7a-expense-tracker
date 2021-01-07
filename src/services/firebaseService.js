import firebase from 'firebase';

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

export function configureNotification (){
    Notification.requestPermission().then((permission) => {
        console.log(permission);
        if(permission === 'granted'){
            messaging.getToken({vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>'}).then((currentToken) => {
                if (currentToken) {
                 console.log("TOKEN : ", currentToken)
                } else {
                  // Show permission request.
                  console.log('No registration token available. Request permission to generate one.');
                 
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
               
              });
        }
    })
}
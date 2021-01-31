import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5udkHc2diBQt4bJnvtoYpJmrehvbbjDs",
    authDomain: "app-chat-d7f6f.firebaseapp.com",
    databaseURL: "https://app-chat-d7f6f.firebaseio.com",
    projectId: "app-chat-d7f6f",
    storageBucket: "app-chat-d7f6f.appspot.com",
    messagingSenderId: "708328145986",
    appId: "1:708328145986:web:639ed6795e3440f75e19db",
    measurementId: "G-0H5G90SRCP"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase
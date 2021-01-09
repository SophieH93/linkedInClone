import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD-Oaz6mg13OFSzht9kOOgLZzxgeRyMtFU",
    authDomain: "linkedin-clone-78c3d.firebaseapp.com",
    projectId: "linkedin-clone-78c3d",
    storageBucket: "linkedin-clone-78c3d.appspot.com",
    messagingSenderId: "950574103253",
    appId: "1:950574103253:web:7f5b6fee036d0a5e9f005c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBElfr8iLg5YizMBaYrYnHel05fGHnTdsE",
    authDomain: "tarefas-2f3c7.firebaseapp.com",
    projectId: "tarefas-2f3c7",
    storageBucket: "tarefas-2f3c7.appspot.com",
    messagingSenderId: "165541257525",
    appId: "1:165541257525:web:e8f16a1cacd1c3bc196c7c",
    measurementId: "G-PCDESYXGKX"
  };

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore()

export default firebaseConfig
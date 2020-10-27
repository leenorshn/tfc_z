
import * as firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyBwgTgwJu0NUPWyqdCnh7OnYdxqEs6iY30",
    authDomain: "controle-doc.firebaseapp.com",
    databaseURL: "https://controle-doc.firebaseio.com",
    projectId: "controle-doc",
    storageBucket: "controle-doc.appspot.com",
    messagingSenderId: "71773823857",
    appId: "1:71773823857:web:c7a7da759c7c60a24e4cd0",
    measurementId: "G-JY65RS82W2"
}
//firebase.initializeApp(firebaseConfig)
firebase.default.initializeApp(firebaseConfig);

// utils
const db = firebase.default.firestore();

// collection references
const docsCollection = db.collection('docs')
const accidentsCollection = db.collection('accidents')


// export utils/refs
export {
  db,
 
  docsCollection,
  accidentsCollection
}
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCXnlxH_Ba7Bsaf6-xPZQbCUfJGDSuj8Y8",
    authDomain: "shinobi-smoothies.firebaseapp.com",
    databaseURL: "https://shinobi-smoothies.firebaseio.com",
    projectId: "shinobi-smoothies",
    storageBucket: "shinobi-smoothies.appspot.com",
    messagingSenderId: "580069745620",
    appId: "1:580069745620:web:bf493e7ebe548401edac41",
    measurementId: "G-LCC37X8E3L"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//export
export default firebaseApp.firestore()
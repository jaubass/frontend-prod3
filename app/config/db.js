// PACO
// import Firebase from 'firebase';
// import 'firebase/firestore';



// DOCU OFICIAL
// https://firebase.google.com/docs/firestore/quickstart#web-modular-api
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCnToeV7j7Z8PQoJcY0NNBpG6hiB8GboIY",
    authDomain: "frontend-5088a.firebaseapp.com",
    projectId: "frontend-5088a",
    storageBucket: "frontend-5088a.appspot.com",
    messagingSenderId: "417204717894",
    appId: "1:417204717894:web:2c5f8e35bdc24eb13f3d47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);





// // TEST


// import { collection, getDocs } from "firebase/firestore"; // TEST
// const querySnapshot = await getDocs(collection(db, "data"));
// querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
// });



// export default db;
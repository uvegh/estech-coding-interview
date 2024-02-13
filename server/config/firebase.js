// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app") ;
const  {getAnalytics}=require("firebase/app") 
const  {getFirestore}=require("firebase/firestore") 


const firebaseConfig = {
  apiKey: "AIzaSyBDanpCkxah2Qb0XQzsrqRcqejZ_I2JnJI",
  authDomain: "expense-tracker-a9e4d.firebaseapp.com",
  databaseURL: "https://expense-tracker-a9e4d-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-a9e4d",
  storageBucket: "expense-tracker-a9e4d.appspot.com",
  messagingSenderId: "194607884029",
  appId: "1:194607884029:web:53c4c2fab304cd07680094",
  measurementId: "G-60C83XFEFD"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
 const db= getFirestore(app)
module.exports={
  app,
   db
}
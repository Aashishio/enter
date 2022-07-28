const firebaseConfig = {
    apiKey: "AIzaSyD3JrbDKqyUEqGC3yCGNy2Z03Jn6JcpCb8",
    authDomain: "enter-your-name-e9d5d.firebaseapp.com",
    databaseURL: "https://enter-your-name-e9d5d-default-rtdb.firebaseio.com",
    projectId: "enter-your-name-e9d5d",
    storageBucket: "enter-your-name-e9d5d.appspot.com",
    messagingSenderId: "145462695867",
    appId: "1:145462695867:web:950b6ec07961c38ca2569e",
    measurementId: "G-EL9ZB3X7RW"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser(){
  input = document.getElementById("input").value;
    firebase.database().ref("/").child(input).update({
      purpose : "Adding User"
    })
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOfRF1XJ2zFdwszrXrUlkcGI38JvcZv2M",
    authDomain: "lets-chat-70eba.firebaseapp.com",
    databaseURL: "https://lets-chat-70eba-default-rtdb.firebaseio.com",
    projectId: "lets-chat-70eba",
    storageBucket: "lets-chat-70eba.appspot.com",
    messagingSenderId: "824396998025",
    appId: "1:824396998025:web:3e827d1e1ef6228824ed58"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function names(){
    room_name = localStorage.getItem("Room_name");
    document.getElementById("room").innerHTML = room_name;
}
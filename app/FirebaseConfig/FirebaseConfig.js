// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

function FirebaseConfig(){
    const firebaseConfig = {
        apiKey: "AIzaSyD1RM__ld2pQXsPrt6AsZlZgj1opnP8HmY",
        authDomain: "nextadmincrud.firebaseapp.com",
        databaseURL: "https://nextadmincrud-default-rtdb.firebaseio.com",
        projectId: "nextadmincrud",
        storageBucket: "nextadmincrud.appspot.com",
        messagingSenderId: "18108871475",
        appId: "1:18108871475:web:df4f8037044b2a962ec446",
        measurementId: "G-CV8E1VQ487"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      return getDatabase(app)
}

export default FirebaseConfig;
import * as firebase from "firebase";

/*Firebase login code */
    const firebaseConfig = {
        apiKey: "AIzaSyAVHiETBoRqLfj_cIK5WliCVPPjGB6IYP8",
        authDomain: "watching-box-01.firebaseapp.com",
        databaseURL: "https://watching-box-01.firebaseio.com",
        projectId: "watching-box-01",
        storageBucket: "",
        messagingSenderId: "410240569214",
        appId: "1:410240569214:web:a2826cf01aa6503358ed2f"  
    };
      // Initialize Firebase
         


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

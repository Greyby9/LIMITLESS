<script type="module">

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

  const firebaseConfig = {
    apiKey: "AIzaSyAwLftNslvPuHAiBy1ew-H6ktLGmG13Obc",
    authDomain: "limitless-760a4.firebaseapp.com",
    projectId: "limitless-760a4",
    storageBucket: "limitless-760a4.appspot.com",
    messagingSenderId: "271081610858",
    appId: "1:271081610858:web:77cda074632a33d498b413"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  
</script>

<script type="module">

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

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
  const db = getFirestore(app);

    document.getElementById("registro").addEventListener("submit", async function(event) {
    event.preventDefault();

    
    const nombre = document.getElementById("nomereg").value;
    const apellidos = document.getElementById("apelidoreg").value;
    const correo = document.getElementById("emailreg").value;
    const contraseña = document.getElementById("passwordreg").value;

    try {
     
      const userCredential = await auth.createUserWithEmailAndPassword(emailreg, passwordreg);
      const user = userCredential.user;


      await db.collection("usuarios").doc(user.uid).set({
        nome: nomereg,
        apelido: apelidoreg,
        email: emailreg
      });

      alert("Usuario registrado exitosamente");
    } catch (error) {
      console.error("Error ao registrar el usuario:", error);
      alert("Error al registrar: " + error.message);
    }
  });
  
</script>

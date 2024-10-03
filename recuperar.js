const firebaseConfig = {
    apiKey: "AIzaSyAwLftNslvPuHAiBy1ew-H6ktLGmG13Obc",
    authDomain: "limitless-760a4.firebaseapp.com",
    projectId: "limitless-760a4",
    storageBucket: "limitless-760a4.appspot.com",
    messagingSenderId: "271081610858",
    appId: "1:271081610858:web:77cda074632a33d498b413"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

        document.getElementById('recuperarpass').addEventListener('submit', function(event) {
            event.preventDefault();
  
            const resetEmail = document.getElementById('emailrec').value;
  
            // Enviar correo de recuperación de contraseña
            auth.sendPasswordResetEmail(resetEmail)
                .then(() => {
                    document.getElementById('error-message').textContent = "Correo de recuperación enviado. Revisa tu bandeja de entrada.";
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    document.getElementById('error-message').textContent = errorMessage;
                });
        });


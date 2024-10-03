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
                    const messageDiv = document.getElementById('error-message');
                    messageDiv.classList.remove('alert-danger');
                    messageDiv.classList.add('alert-success');  // Cambiar a alert-success
                    messageDiv.textContent = "Correo de recuperação enviado. Verifique sua caixa de entrada.";
                    messageDiv.classList.remove('d-none'); // Mostrar el mensaje
                })
                .catch((error) => {
                     const errorMessage = error.message;
                    const messageDiv = document.getElementById('error-message');
                    messageDiv.classList.remove('alert-success'); // Remover clase de éxito
                    messageDiv.classList.add('alert-danger'); // Asegurarse de que sea un mensaje de error
                    messageDiv.textContent = errorMessage;
                    messageDiv.classList.remove('d-none'); // Mostrar el mensaje
                });
        });


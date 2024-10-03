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

// Manejar el inicio de sesión
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('emaillog').value;
    const loginPassword = document.getElementById('passwordlog').value;

    // Iniciar sesión del usuario en Firebase Authentication
    auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        .then((userCredential) => {
            // Usuario autenticado correctamente
            console.log("Usuario autenticado correctamente.");
            // Aquí puedes redirigir o mostrar un mensaje de éxito
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('error-message').textContent = errorMessage;
        });
});

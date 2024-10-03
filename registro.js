import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwLftNslvPuHAiBy1ew-H6ktLGmG13Obc",
  authDomain: "limitless-760a4.firebaseapp.com",
  projectId: "limitless-760a4",
  storageBucket: "limitless-760a4.appspot.com",
  messagingSenderId: "271081610858",
  appId: "1:271081610858:web:77cda074632a33d498b413"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById('registro').addEventListener('submit', function(event) {
            event.preventDefault();
  
            const nome = document.getElementById('nomereg').value;
            const apelido = document.getElementById('apelidoreg').value;
            const email = document.getElementById('emailreg').value;
            const password = document.getElementById('passwordreg').value;
  
  auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    
                    const user = userCredential.user;

                    // Actualizar el perfil del usuario con nombre y apellido
                    return user.updateProfile({
                        displayName: `${nome} ${apelido}`
                    }).then(() => {
                        // Guardar datos en Firestore
                        return db.collection("users").doc(user.uid).set({
                            firstName: nome,
                            lastName: apelido,
                            email: email
                        });
                    });
                })
                .then(() => {
                  const successMessageDiv = document.getElementById('success-message');
                      successMessageDiv.textContent = "¡Usuario creado correctamente!";
                      successMessageDiv.style.display = "block";
                    console.log("efectivo");
                    
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    document.getElementById('error-message').textContent = errorMessage;
                });
        });

document.getElementById('login')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('emaillog').value;
    const password = document.getElementById('passwordlog').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const successMessageDiv = document.getElementById('success-message-login');
            successMessageDiv.textContent = "¡Sesión iniciada correctamente!";
            successMessageDiv.style.display = "block";
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('error-message-login').textContent = errorMessage;
        });
});

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
};

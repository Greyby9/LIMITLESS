
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


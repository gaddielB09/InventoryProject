document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit-button');
    
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    
    // Habilita el botón si hay texto en ambos campos
    const enableButton = () => {
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    };

    // Valida los campos al escribir en los inputs
    usernameInput.addEventListener('input', enableButton);
    passwordInput.addEventListener('input', enableButton);

    // Validar el formulario y redirigir
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Limpiar mensajes de error
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Ejemplo de validación (aquí puedes agregar tus propias validaciones)
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;

        if (username === '') {
            usernameError.textContent = 'Username is required';
            isValid = false;
        }

        if (password === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        }

        // Si la validación es correcta, redirige al nuevo HTML
        if (isValid) {
            window.location.href = 'adminMain.html'; // Aquí colocas la ruta del HTML al que quieres redirigir
        }
    });
});

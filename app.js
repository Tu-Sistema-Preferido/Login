document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificación sencilla de credenciales (ejemplo básico)
    if (username === 'user' && password === 'password') {
        alert('Login exitoso');
        window.location.href = 'https://tu-sistema-preferido.github.io/factOnline/';
        // Redirige o realiza otras acciones después del login exitoso
    }
    if (username === 'Adrian' && password === '12345678') {
        alert('Login exitoso');
        window.location.href = 'https://tu-sistema-preferido.github.io/factOnline/';
        // Redirige o realiza otras acciones después del login exitoso
    }
    if (username === 'CumbresToluca' && password === 'TolTORRES') {
        alert('Login exitoso');
        window.location.href = 'https://tu-sistema-preferido.github.io/factOnline/';
        // Redirige o realiza otras acciones después del login exitoso
    } else {
        document.getElementById('error-message').textContent = 'Credenciales incorrectas';
    }
});

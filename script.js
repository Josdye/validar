document.getElementById('controlNumberForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const controlNumber = document.getElementById('controlNumber').value;
    const messageDiv = document.getElementById('message');

    const regex = /^(20|21|22|23|24)84\d{4}$/;
    // Validar el número de control
    if (regex.test(controlNumber)) {
        messageDiv.textContent = 'valido';
        messageDiv.style.color = 'white';
    } else {
        messageDiv.textContent = 'invalido';
        messageDiv.style.color = 'red';
    }
});


function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var codigo = document.getElementById("codigo").value;
    var ciudad = document.getElementById("ciudad").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var motivo = document.getElementById("motivo").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validación básica, solo verifica si los campos están vacíos
    if (nombre == "" || apellido == "" || codigo == "" || ciudad == "" || correo == "" || telefono == "" || motivo == "" || mensaje == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    return true;
}
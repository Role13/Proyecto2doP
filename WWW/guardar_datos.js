document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario
  
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
  
    // Crear un objeto para almacenar los datos
    var datos = {
      nombre: nombre,
      email: email,
      mensaje: mensaje
    };
  
    // Guardar los datos en el almacenamiento local
    localStorage.setItem('datosContacto', JSON.stringify(datos));
  
    // Mostrar un mensaje de confirmación
    alert('Los datos se han guardado correctamente.');
  });
  
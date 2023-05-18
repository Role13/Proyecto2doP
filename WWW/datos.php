<?php


$nombre = $_POST['nombre'];

$email = $_POST['email'];

$mensaje = $_POST['mensaje'];

$datos = "Nombre: " . $nombre . "\n" . "Email: " . $email . "\n" . "Mensaje: " . $mensaje . "\n\n";

$archivo = fopen("datos.txt", "a");
fwrite($archivo, $datos);
fclose($archivo);

echo "Los datos se han guardado correctamente.";

?>

<?php
/*header('Content-type: application/json');*/

if(!empty($_POST["nombre"]) && !empty($_POST["email"]) && !empty($_POST["comentario"])){

$to = "hola@lospepesweb.com";
$subject = "Contacto desde la WEB";

$contenido = "Nombre: ".$_POST["nombre"]."\n";
$contenido .= "Email: ".$_POST["email"]."\n\n";
$contenido .= "Comentario: ".$_POST["comentario"]."\n\n";

$header = "From: hola@lospepesweb.com\nReply-To:".$_POST["email"]."\n";
$header .= "Mime-Version: 1.0\n";
$header .= "Content-Type: text/plain";

/*return print (json_encode('ok'));*/
/*mail($to, $subject, $contenido ,$header)*/
}
mail($to, $subject, $contenido ,$header)
/*return print (json_encode('no'));*/
?>
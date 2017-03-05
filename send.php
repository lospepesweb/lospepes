<?php
if(!empty($_POST["nombre"]) && !empty($_POST["email"]) && !empty($_POST["comentario"])){

$to = "hola@lospepesweb.com";
$subject = "Contacto desde la WEB";

$contenido .= "Nombre: ".$_POST["nombre"]."\n";
$contenido .= "Email: ".$_POST["email"]."\n\n";
$contenido .= "Comentario: ".$_POST["comentario"]."\n\n";

$header = "From: hola@lospepesweb.com\nReply-To:".$_POST["email"]."\n";
$header .= "Mime-Version: 1.0\n";
$header .= "Content-Type: text/plain";

if(mail($to, $subject, $contenido ,$header)){
echo "<script>";
echo " alert('Formulario enviado con éxito.');      
        window.location.href='"."http://www.lospepesweb.com/"."';
      </script>";


}
} else {
echo "<script>";
echo " alert('Error! para enviar el formulario, tenés que completar todos los campos de texto.');      
        window.location.href='"."http://www.lospepesweb.com/#contacto"."';
      </script>";
}
?>
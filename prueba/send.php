 <?php

 if(!empty($_POST['nombre']) AND !empty($_POST['email']) AND !empty($_POST['comentario'])){

$to ="hola@lospepesweb.com";
/*$header = "Content-Type: text/html; charset=iso-8859-1\n"; 
$header .= "From:".$_POST['nombre']."\r\n";*/

$header = "From: hola@lospepesweb.com\nReply-To:".$_POST["email"]."\n";
$header .= "Mime-Version: 1.0\n";
$header .= "Content-Type: text/html; charset=iso-8859-1\n";
			
$subject="Contacto desde el Sitio Web";
$mensaje="
<table border='0' cellspacing='2' cellpadding='2'>
  <tr>
    <td width='20%' align='center' bgcolor='#B0B500'><strong>Nombre:</strong></td>
    <td width='80%' align='left'>$_POST[nombre]</td>
  </tr>
  <tr>
    <td align='center' bgcolor='#B0B500'><strong>E-mail:</strong></td>
    <td align='left'>$_POST[email]</td>
  </tr>
  <tr>
    <td align='center' bgcolor='#B0B500'><strong>Comentario:</strong></td>
    <td align='left'>$_POST[comentario]</td>
  </tr>
</table>
";
@mail($to,$subject,$mensaje,$header); 
    echo "<script>";
	echo "window.location.href='"."http://www.lospepesweb.com/"."';
      </script>";

}
?>
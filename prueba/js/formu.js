
function vercaja(caja){
 if (caja.value=="") {
  caja.className='mal';
 } else {
  caja.className='form-input';
 }
}

function validaremail(elemento) {
   	if (elemento.value!=""){
        var dato = elemento.value;
        var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-z0-9-])+.)+([a-zA-Z0-9-]{2,4})+$/;
        if (!expresion.test(dato)) {
            elemento.className='error';
        } else {
        elemento.className='form-input';
        }
	}
}

function validar(form) {
  if(form.nombre.value=="") { //Si este campo está vacío
    alert('No has escrito tu nombre'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }

  if(form.email.value=="") { //Si este campo está vacío
    alert('No has escrito tu e-Mail'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }

  if(form.comentario.value=="") { //Si este campo está vacío
    alert('No olvidés enviarnos tu comentario!'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  
  $('.enviando').removeClass('hide');
            var datos = 'nombre='+ nombre + '&email=' + email + '&comentario=' + comentario;
            form.preventDefault();
            $.ajax({
                type: "POST",
                url: "../send.php",
                data: datos,
                success: function() {
                    $('.enviando').hide();
                    $('.mensaje').text('Mensaje enviado!').addClass('mensaje_ok').animate({ 'right' : '130px' }, 300);  
                },
                error: function() {
                    $('.enviando').hide();
                    $('.mensaje').text('Hubo un error!').addClass('mensaje_no').animate({ 'right' : '130px' }, 300);                 
                }
            });
            return false;

}


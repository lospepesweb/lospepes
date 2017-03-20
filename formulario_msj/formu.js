$(document).ready(function(){

	$(".form-contacto").bind("submit",function(){
		
		$.ajax({
		type:$(this).attr("method"),
		url:$(this).attr("action"),
		data:$(this).serialize(),
		beforeSend:function(){  
            $('#enviando').css("display", "block");
            },
        complete:function(){
        	$('#enviando').css("display","none");
        	},
       	success: function(){
			$('#alerta').removeClass("oculto")/*.addClass("form-enviado")*/;
			$('.respuesta').html("Formulario enviado: ");
			$('.msj-resp').html("En breve nos pondremos en contacto con vos.");
						$('#nombre').val('');
			$('#email').val('');
			$('#comentario').val('');
			}
		});

		return false
	});
});

function cerrar_alerta(){
	$('#alerta').addClass("oculto");
};
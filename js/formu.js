
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
       		/*swal({
  				title: "Formulario enviado:",
  				text: "En breve nos pondremos en contacto con vos.",
  				imageUrl: "thumbs-up.jpg"
			});*/
			swal({
  				title: '<span class="informa_titulo">Formulario enviado</span>',
  				imageUrl: 'img/thumbs-up.jpg',
  				imageWidth: 300,
  				imageHeight: 300,
  				html: $('<div>')
    				.addClass('informa_texto')
    				.text('En breve nos pondremos en contacto con vos.'),
  				animation: false,
  				customClass: 'animated2 tada',
  				buttonsStyling: false,
  				confirmButtonClass: 'boton_confirma'
				});
			
			$('#nombre').val('');
			$('#email').val('');
			$('#comentario').val('');
			}
		});

		return false
	});
});


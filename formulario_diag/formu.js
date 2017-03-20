$( function() {
    $( "#dialog" ).dialog();
  } );
 
/*$(function cerrar_dialogo(){
	$( "#dialog" ).dialog("close");
});*/ 	

$(document).ready(function(){
	
	$("#dialog").dialog("close");
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
			$( "#dialog" ).dialog("open");			
			$('#nombre').val('');
			$('#email').val('');
			$('#comentario').val('');
			}
		});

		return false
	});
});


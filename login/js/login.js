(function(){


// -- COMPORTAMIENTO DEL BOTÓN ENTRAR -- //

// VARIABLES
var boton = document.getElementById("button");
var usuarioInput = document.getElementById("usuario");
var passInput = document.getElementById("pass");
var enviarFormulario = document.getElementById("login");

// FUNCIONES
// Compruebo si el input esta vacío, agrego shake y luego saco shake
var entrar = function(){
	var validaUsuario = usuarioInput.value;
	var validaPass = passInput.value;

	if(validaUsuario === ""){
		usuarioInput.className = "form-control input shake-hard";
		boton.blur();
		usuarioInput.focus();
		var comprobarInput = function(){
			usuarioInput.className = "form-control input";
			passInput.className = "form-control input";
		};
		setTimeout(comprobarInput, 500);
		return false
	}
	if(validaPass === ""){
		passInput.className = "form-control input shake-hard";
		boton.blur();
		passInput.focus();
		var comprobarInput = function(){
			usuarioInput.className = "form-control input";
			passInput.className = "form-control input";
		};
		setTimeout(comprobarInput, 500);
		return false
	}
	//window.location = "todolist/index.html";
	enviarFormulario.submit();
};

// EVENTOS
boton.addEventListener("click", entrar);



// -- CENTRADO VERTICAL DEL FORMULARIO -- //

// FUNCIONES
var seteo = function(){
	var alturaPantalla = window.innerHeight;
	var alturaFormulario = document.getElementById("formulario").clientHeight;
	var margen = (alturaPantalla - alturaFormulario) / 2 ;

	document.getElementById("formulario").style.marginTop = margen+"px";
	document.getElementById("formulario").style.marginBottom = margen+"px";
};

// EVENTOS
seteo();
window.addEventListener("resize", seteo);

}())
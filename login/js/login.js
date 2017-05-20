// -- COMPORTAMIENTO DEL BOTÓN ENTRAR -- //

// VARIABLES
var boton = document.getElementById("button");
var usuarioInput = document.getElementById("usuario");
var passInput = document.getElementById("pass");

// FUNCIONES
// Compruebo si el input esta vacío y agrego shake
var entrar = function(){
	var validaUsuario = usuarioInput.value;
	var validaPass = passInput.value;

	if(validaUsuario === ""){
		usuarioInput.className = "form-control input shake-hard";
		boton.blur();
		return false
	}
	if(validaPass === ""){
		passInput.className = "form-control input shake-hard";
		boton.blur();
		return false
	}
	window.location = "todolist/index.html";
};
// Saco el shake
var comprobarInput = function(){
	usuarioInput.className = "form-control input";
	passInput.className = "form-control input";
};

// EVENTOS
usuarioInput.addEventListener("click", comprobarInput);
passInput.addEventListener("click", comprobarInput);
boton.addEventListener("click", entrar);





// -- CENTRADO VERTICAL DEL FORMULARIO -- //

// VARIABLES
var alturaPantalla = window.innerHeight;
var alturaFormulario = document.getElementById("formulario").clientHeight;
var margen = (alturaPantalla - alturaFormulario) / 2 ;

// SETEO
document.getElementById("formulario").style.marginTop = margen+"px";
document.getElementById("formulario").style.marginBottom = margen+"px";
(function (){

// -- SELECCIÓN DEL IDIOMA -- //

// VARIABLES
var btnEsp = document.getElementById("esp");
var btnEng = document.getElementById("eng");

// FUNCIONES
// Agrego clase al botón español y se la saco al ingles
var colorEsp = function(){
	btnEsp.className = "btn btn-languaje-active";
	btnEng.className = "btn btn-languaje";
};

// Agrego clase al botón ingles y se la saco al español
var colorEng = function(){
	btnEng.className = "btn btn-languaje-active";
	btnEsp.className = "btn btn-languaje";
};

// EVENTOS
btnEsp.addEventListener("click", colorEsp);
btnEng.addEventListener("click", colorEng);



// -- CENTRADO VERTICAL DEL FORMULARIO -- //

// VARIABLES
var alturaPantalla = window.innerHeight;
var alturaDiv = 559 + 2 // document.getElementById("modal-dialog").clientHeight;
var margen = (alturaPantalla - alturaDiv) / 2;

// FUNCIONES
function seteo(){
	document.getElementById("modal-dialog").style.marginTop = margen+"px";
	document.getElementById("modal-dialog").style.marginBottom = margen+"px";

};

// EVENTOS
seteo();




// -- TRANSFORMACIÓN DEL MENÚ HAMBURGUESA -- //

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});








}())




// -- COMPORTAMIENTO DEL BOTÓN ENTRAR -- //

// VARIABLES
var boton = document.getElementById("button");
var nombreInput = document.getElementById("recipient-name");
var mailInput = document.getElementById("recipient-email");
var ideaInput = document.getElementById("message-text");
var formulario = document.getElementById("formContacto");


// FUNCIONES
// Si doy clic en enviar ejecuta está funció, la que comprueba que el formu este comleto
var entrar = function(){

var validaNombre = nombreInput.value;
var validaMail = mailInput.value;
var validaIdea = ideaInput.value;

	if(validaNombre === ""){
		nombreInput.className = "form-control error";
		return false
	} else {
		nombreInput.className = "form-control";
	}
	if(validaMail === ""){
		mailInput.className = "form-control error";
		return false
	} else {
		mailInput.className = "form-control";
	}
	if(validaIdea === ""){
		ideaInput.className = "form-control error";
		return false
	} else {
		ideaInput.className = "form-control error";
	}
	
	formulario.submit();
};

// EVENTOS
boton.addEventListener("click", entrar);
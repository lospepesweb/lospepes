(function (){

// -- SELECCIÓN DEL IDIOMA -- //
// VARIABLES
var btnEsp = document.getElementById("esp");
var btnEng = document.getElementById("eng");
var btnXsEsp = document.getElementById("espxs");
var btnXsEng = document.getElementById("engxs");

// FUNCIONES
// Agrego clase al botón español y se la saco al ingles
var colorEsp = function(){
	btnEsp.className = "btn btn-languaje-active";
	btnEng.className = "btn btn-languaje";
};
function colorXsESP(){
	btnXsEsp.className = "btn btn-languaje-active";
	btnXsEng.className = "btn btn-languaje";
};
// Agrego clase al botón ingles y se la saco al español
var colorEng = function(){
	btnEng.className = "btn btn-languaje-active";
	btnEsp.className = "btn btn-languaje";
};

function colorXsEng(){
	btnXsEsp.className = "btn btn-languaje";
	btnXsEng.className = "btn btn-languaje-active";
}

// EVENTOS
btnEsp.addEventListener("click", colorEsp);
btnEng.addEventListener("click", colorEng);
btnXsEsp.addEventListener("click", colorXsESP);
btnXsEng.addEventListener("click", colorXsEng);




// -- CENTRADO VERTICAL DEL FORMULARIO -- //
// VARIABLES
var alturaPantalla = window.innerHeight;
var alturaDiv = 547 // document.getElementById("modal-dialog").clientHeight;
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




// -- AJUSTE DEL MENU DESPLEGABLE A LA ALTURA DEL CELULAR -- //
// VARIALBES
var anchoPantalla = window.innerWidth;
var alturaBTN = ((alturaPantalla - 463.5) * 0.5898 ) + 30;
var marignTOP = (alturaPantalla - 463.5) * 0.4102;

// FUNCIONES
if (anchoPantalla < 767) {
	document.getElementById("btn-languaje").setAttribute("style","height:"+alturaBTN+"px; margin-top:"+marignTOP+"px");
}


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

	if(nombreInput.value === ""){
		nombreInput.className = "form-control error";
		nombreInput.focus();
		return false
	} else {
		nombreInput.className = "form-control";
	}
	if(mailInput.value === ""){
		mailInput.className = "form-control error";
		mailInput.focus();
		return false
	} else {
		mailInput.className = "form-control";
	}
	if((ideaInput.value === "") || (ideaInput.value.length < 10)){
		ideaInput.className = "form-control error";
		ideaInput.focus();
		return false
	} else {
		ideaInput.className = "form-control";
	}
	
	formulario.submit();
};

// Control de input por input
var controlNombre = function(){

	if(nombreInput.value === ""){
		nombreInput.className = "form-control error";
		return false
	} else {
		nombreInput.className = "form-control";
	}

};
var controlMail = function(){

	if(mailInput.value === ""){
		mailInput.className = "form-control error";
		return false
	} else {
		mailInput.className = "form-control";
	}

};
var controlIdea = function(){

	if((ideaInput.value === "") || (ideaInput.value.length < 10) ){
		ideaInput.className = "form-control error";
		return false
	} else {
		ideaInput.className = "form-control";
	}

};
// Agregar la clase focus al boton submit al completar todos los campos
var completo = function(){

	if (!(nombreInput.value === "") && !(mailInput.value === "") && (ideaInput.value.length > 8)) {
		boton.className = "btn btn-formu-active";
		ideaInput.className = "form-control";
	} else {
		boton.className = "btn btn-formu";
	}
}

// EVENTOS
boton.addEventListener("click", entrar);

nombreInput.addEventListener("change", controlNombre);
mailInput.addEventListener("change", controlMail);
ideaInput.addEventListener("change", controlIdea);

nombreInput.addEventListener("change", completo);
mailInput.addEventListener("change", completo);
ideaInput.addEventListener("keypress", completo);


}())
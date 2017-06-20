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
var alturaDiv = 577 + 2 // document.getElementById("modal-dialog").clientHeight;
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
(function (){

// -- SELECCIÓN DEL IDIOMA -- //

// VARIABLES
var esp = document.getElementById("esp");
var eng = document.getElementById("eng");


// FUNCIONES
// Agrego clase al botón español y se la saco al ingles
var colorEsp = function(){
	esp.className = "btn btn-languaje-active";
	eng.className = "btn btn-languaje";
};

// Agrego clase al botón ingles y se la saco al español
var colorEng = function(){
	eng.className = "btn btn-languaje-active";
	esp.className = "btn btn-languaje";
};


// EVENTOS
esp.addEventListener("click", colorEsp);
eng.addEventListener("click", colorEng);

}())
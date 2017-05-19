(function(){
	//VARIABLES
	var tarea = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnAgregar = document.getElementById("btnAgregar");

	//FUNCIONES
	var agregarTarea = function(){
		alert("Hola Mundo!");
	};


	//EVENTOS
	//Agregar tarea
	btnAgregar.addEventListener("click", agregarTarea);
}());
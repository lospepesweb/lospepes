(function(){
	// VARIABLES
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btnAgregar");

	// FUNCIONES
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "¡AGREGAR TAREA!");
			tareaInput.className = "error";
			return false;
		}

		enlace.appendChild(contenido);
		enlace.setAttribute("href","#");
		nuevaTarea.appendChild(enlace);
		lista.appendChild(nuevaTarea);
		tareaInput.value = "";

		for (var i = 0; i < lista.children.length; i++){
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
	};

	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agregar tarea")
	};

	var eliminarTarea = function (){
		this.parentNode.removeChild(this);
	};

	// EVENTOS
	// Agregar tareas
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar inputs
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando elementos de la lista
	for (var i = 0; i < lista.children.length; i++){
		lista.children[i].addEventListener("click", eliminarTarea);
	}
}());
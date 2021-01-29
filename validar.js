function validar (formulario){
	if (formulario.nombre.value.length < 5) {
		alert("Escribe por lo menos 5 caracteres en el campo nombre");
		formulario.nombre.focus();
		return false;
	}
}
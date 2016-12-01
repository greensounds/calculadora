/*function hola () {
	window.alert("Funciona");
}*/

//Función para calcular la propina
function calcularPropina () {
	//Guardar información
	var cuentaTotal = document.getElementById("monto").value;	
	var servicioCalidad = document.getElementById("calidad").value;
	var numPersonas = document.getElementById("totalPersonas").value;

	//Validar
	if(cuentaTotal == "" || servicioCalidad == 0) {
		return window.alert("Agrega algunos datos para que la calculadora funcione");
	} 

	if(numPersonas === "" || numPersonas <= 1) {
		numPersonas = 1;

		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block";
	}

	//Matemática
	var total = (cuentaTotal * servicioCalidad) / numPersonas;
	total = Math.round(total * 100) /100;
	total = total.toFixed(2);


	//Display Propina
	document.getElementById("cuentaTotal").style.display = "block";
	document.getElementById("propina").innerHTML = total;

	//window.alert(total);
}

//Esconder la propina antes de cargar
document.getElementById("cuentaTotal").style.display = "none";
document.getElementById("each").style.display = "none";

//Desencadenar un evento
document.getElementById("calcular").onclick = function() { calcularPropina(); };

$(function () {
	
	var a = "0";
	var b = "";
	var operando = "";
	var variableAactiva = true;  /* variable que nos indica si es la variable a la que esta a la espera de recibir datos (true) 
									* o la variable b (false)  */

				// --------  función añadir números al display
				 
	function anadir(valor) {

		if (variableAactiva) { 
			if (a != "0") {			// si a vale cero machacamos el cero, si no, concatenamos a la derecha del valor anterior
				a += valor;
			} else {
				a = valor;
			}

			$("#displayText").html(a);  // mostramos en el display
			
		} else {
			b += valor;


			$("#displayText").html(a + b);   // mostramos en el display
		}
	};

	$("#displayText").html(a);  // mostramos al cargar la pagina el cero

			//  ********************   TECLADO NÚMERICO  *********************  //

		// ------------ EL 0 TIENE UN TRATAMIENTO ESPECIAL  ----------- //

	$("#cero").click(function () {
		if (variableAactiva) {
			if (a != "0") {			// si a no vale cero concatenamos a la derecha del valor anterior
				a += "0";
			}
			$("#displayText").html(a);   // mostramos en el display
		} else {
			b += "0";
			$("#displayText").html(a+b);   // mostramos en el display
		}
	});

		// --------  LOS DEMÁS NÚMEROS TIENEN EL MISMO TRATAMIENTO  -------- 

	$("#uno").click(function () {
		anadir ("1");
	});

	$("#dos").click(function () {
		anadir ("2");
	});

	$("#tres").click(function () {
		anadir ("3");
	});

	$("#cuatro").click(function () {
		anadir ("4");
	});

	$("#cinco").click(function () {
		anadir ("5");
	});

	$("#seis").click(function () {
		anadir ("6");
	});

	$("#siete").click(function () {
		anadir ("7");
	});

	$("#ocho").click(function () {
		anadir ("8");
	});

	$("#nueve").click(function () {
		anadir ("9");
	});

			//  ********************   TECLAS OPERANDOS  *********************  //

				// función sumar

	$("#sumar").click(function () {			
		if (variableAactiva) {
			a += " + ";
			$("#displayText").html(a);   // mostramos en el display
			variableAactiva = false;	// le ponemos el más a la cadena a e indicamos que ahora trabajaremos con la variable b
		} else {
			alert("Ya indico un operación");
		}
	});
				// función restar

	$("#restar").click(function () {
		if (variableAactiva) {
			a += " - ";
			$("#displayText").html(a);   // mostramos en el display
			variableAactiva = false;	// le ponemos el más a la cadena a e indicamos que ahora trabajaremos con la variable b
		} else {
			alert("Ya indico un operación");
		}
	});

		// --- función igual  ----

	$("#igual").click(function () {
		var resultado = a.split(" ");	// la cadena "a" contenia el operando seleccionado concatenado con un espacio
		a = resultado[0];
		if (resultado[1] == "+") {			// los separamos con split()
			a = parseInt(a) + parseInt(b);		// suma
			b = "0";

			$("#displayText").html(a.toString());   /* mostramos en el display y aprovechamos para que el resultado sea a 
											* por si queremos seguir haciendo calculos con este resultado */
		} else {							
			a = parseInt(a) - parseInt(b);		// resta

			$("#displayText").html(a.toString());   /* mostramos en el display y aprovechamos para que el resultado sea a 
											* por si queremos seguir haciendo calculos con este resultado */
		}
		b = "";
		variableAactiva = true;
	});

			//  ********************   TECLA CE  *********************  //

	$("#borrar").click(function () {
		a = "0";						// reiniciamos las variables
		b = "";
		variableAactiva = true;

		$("#displayText").html(a);   // mostramos en el display
	});

});
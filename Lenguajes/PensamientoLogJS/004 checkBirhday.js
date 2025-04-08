"use strict";

//Declaración de variables
let dia;
let mes;
let anio;

//Bucle de 10 vidas, cuando se acaban se sale del bucle
for (let i = 0; i < 10; i++) {
    dia = + prompt("Introduce el día de tu nacimiento (1-31): ");
    mes = + prompt("Introduce el mes de tu nacimiento (1-12): ");
    anio = + prompt("Introduce el año de tu nacimiento: ");

    //Comprobación de que el día, mes y año son correctos
    if (dia == 2 && mes == 10 && anio == 2005) {
        alert("¡Felicidades! Has acertado.");
        break;
    }
    //Comprobación de que el día, mes y año son incorrectos
    else (prompt("Lo siento, no has acertado. Te quedan " + (10 - i - 1) + " vidas."));
}
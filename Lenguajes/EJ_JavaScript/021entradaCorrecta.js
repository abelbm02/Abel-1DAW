"use strict";

//Declaramios la variable num
let num;

// Usamos un bucle while para que se repita el prompt hasta que se introduzca un número
while (true) {
    num = prompt("Introduce un número: ");

    // Con break salimos del bucle si no se introduce nada
    if (num == "" || num == null) {
        alert("No has introducido ningún número");
        break;
    }

    // Con break salimos del bucle si el número es mayor que 100
    if (num > 100){
        alert("El número introducido es mayor que 100");
        break;
    }
    else if (num < 100){
        alert("El número introducido es menor que 100");
        }
}
"use strict";

let numero = +prompt("Introduce un número de tarjeta de crédito por ejemplo (4012-8888-8888-1881): "); 
let suma = 0;
let digitos = [];

// Convertir el número a un array de dígitos
digitos = numero.toString().split("").map(Number); 

for (let i = digitos.length - 1; i >= 0; i--) {
    let digito = digitos[i];
    
    // Si es un dígito en posición par (desde la derecha)
    if ((digitos.length - i) % 2 === 0) {
        digito *= 2;
        // Si el resultado es mayor que 9, sumar sus dígitos
        if (digito > 9) {
            digito = (digito % 10) + Math.floor(digito / 10);
        }
    }
    
    // Sumar el dígito (modificado o no) a la suma total
    suma += digito;

    if (i === 0 && suma % 10 === 0) {
        alert("El número de tarjeta es válido.");
    }
    else if (i === 0 && suma % 10 !== 0) {
        alert("El número de tarjeta no es válido.");
    }
}

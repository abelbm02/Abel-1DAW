"use strict";

let numero = prompt("Introduce un número de tarjeta de crédito: ");

function validartarjeta() {

    let suma = 0;
    let digitos = numero.toString().split("").map(Number);

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
}

    const esValida = suma % 10 === 0;

    if (/^3[47]/.test(numero) && esValida && numero.length === 15) {
        alert("El número de tarjeta es American Express 💳 ✅");
        } 
    else if (/^4/.test(numero) && esValida && (numero.length === 13 || numero.length === 16)) {
        alert("El número de tarjeta es Visa 💳 ✅");
        }
    else if (/^5[1-5]/.test(numero) && esValida && numero.length === 16) {
        alert("El número de tarjeta es MasterCard 💳 ✅");
        }
        else {
            alert ("El número de tarjeta no es válido ❌");
        }
    }

validartarjeta();
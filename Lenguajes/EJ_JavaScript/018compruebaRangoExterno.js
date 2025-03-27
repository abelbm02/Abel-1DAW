"use strict";

let age = prompt("Introduce tu edad: ");
age = Number(age);

// Con ! se niega la condición, es lo contrario a la condición
if (!(age >= 18 && age <= 99)) {
    alert("Eres un chaval");
}
else { 
    alert("Eres un carcamal"); 
}

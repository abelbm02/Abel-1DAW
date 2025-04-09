"use strict";

//Bucle for que imprime los números del 1 al 100
for (let i = 1; i <= 100; i++) {

    // Si el número es divisible por 3 y 5, imprime "meloso", si es divisible por 3, imprime "miel", si es divisible por 5, imprime "oso", si no, imprime el número
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("meloso 🧸");

    // Si el número es divisible por 3, imprime "miel", si es divisible por 5, imprime "oso", si no, imprime el número
    } else if (i % 3 === 0) {
        console.log("miel 🍯");

    // Si el número es divisible por 5, imprime "oso", si no, imprime el número    
    } else if (i % 5 === 0) {
        console.log("oso 🐻");

    // Si no es divisible por 3 ni por 5, imprime el número    
    } else {
        console.log(i);
    }
}

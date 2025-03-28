"use strict";

    //PRIMERA FORMA CON BUCLE FOR
let n = parseInt(prompt("Introduce el valor de n:"));

for (let i = 2; i <= n; i++) {
    let primo = true;
    
    // Verifica si 'i' es primo
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false;
            break;
        }
    }

    // Si 'i' es primo, lo muestra
    if (primo) {
        alert(i);
    }
}

    // SEGUNDA FORMA DE HACERLO CON BUCLE WHILE
/*
let n = parseInt(prompt("Introduce el valor de n:"));
let i = 2;

while (i <= n) {
    let primo = true;
    
    // Verifica si 'i' es primo
    let j = 2;
    while (j < i) {
        if (i % j === 0) {
            primo = false;
            break;
        }
        j++;
    }

    // Si 'i' es primo, lo muestra
    if (primo) {
        alert(i);
    }
    i++;} 
*/

    //TERCERA FORMA DE HACERLO BUCLE DO WHILE
/*
let n = parseInt(prompt("Introduce el valor de n:"));
let i = 2;

do {
    let primo = true;
    
    // Verifica si 'i' es primo
    let j = 2;
    do {
        if (i % j === 0) {
            primo = false;
            break;
        }
        j++;
    } while (j < i);

    // Si 'i' es primo, lo muestra
    if (primo) {
        alert(i);
    }

    i++;
} while (i <= n);
*/
"use strict";

//El problema es que prompt devuelve un string, por lo que al sumarlos se concatenan en lugar de sumarse.
let a = prompt("¿Primer número?");

let b = prompt("¿Segundo número?");

//Para solucionarlo, se debe convertir los valores a números antes de sumarlos.

a = parseInt(a);
b = parseInt(b);

alert(a + b); // 12
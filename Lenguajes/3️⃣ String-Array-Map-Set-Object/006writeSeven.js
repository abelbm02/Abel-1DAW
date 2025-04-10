"use strict";

//Escribe una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.

function numalea () {
    let num = [];
    while (num.length < 7){
        let numeroaleatorio = Math.floor(Math.random() * 10);
        if (!num.includes(numeroaleatorio)) {
        num.push(numeroaleatorio);}

        return num;
    }
}

console.log(numalea());
"use strict";

//Recoger la lista de monos y bananas
let lista = prompt("Escribe los monos 🐵 y bananas 🍌 ");

//Contar los monos y las bananas de la lista
//Usamos el método match para contar los emojis
let monos = (lista.match(/🐵/g) || []).length;
let bananas = (lista.match(/🍌/g) || []).length;

//Condicional para comprobar si hay suficientes bananas
if (bananas >= monos) {
    // Distribuir las bananas entre los monos
    let banpormono = Math.floor(bananas / monos); // bananas por mono
    let bananasdmas = bananas % monos; // bananas restantes

    console.log(`Cada mono recibirá ${banpormono} bananas.`);

    //Si quedan bananas, se las damos a los monos
    if (bananasdmas > 0) {
        console.log(`Además, ${bananasdmas} monos recibirán una banana extra.`);
    }
    //Si no hay suficientes bananas, se lo decimos
} else {
    console.log("¡Oh no! ¡No hay suficientes bananas para los monos! 😭");
}
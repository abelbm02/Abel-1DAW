"use strict";

let thor = "Thor es el hijo de Odín";

// Largo de la cadena
let largo = thor.length;
console.log(largo); // 26

//Encontrar la letra o
let thorO = thor.indexOf("o");
console.log(thorO); // 1

//Encontrar el carácter que ocupa la posición 3
let thor3 = thor.charAt(3);
console.log(thor3); // r

//¿Qué carácter ocupa la posición 1?
let thor1 = thor.charAt(1);
console.log(thor1); // h

//Trocea la cadena usando los espacios en blanco
let thorTroceado = thor.split(" ");
console.log(thorTroceado); // [ 'Thor', 'es', 'el', 'hijo', 'de', 'Odín' ]

//Reemplaza Thor por Loki
let loki = thor.replace("Thor", "Loki");
console.log(loki); // Loki es el hijo de Odín

//Recorta la cadena para que devuelva la palabra Odín
let odin = thor.substring(20, 24);
console.log(odin); // Odín

//¿Puedes encontrar la letra a? Demuéstralo
let thorA = thor.indexOf("a");
console.log(thorA); // -1 (no existe)

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
let thorMitad = thor.substring(0, 12) + thor.substring(12).toLowerCase();
console.log(thorMitad); // Thor es el hijo de odín
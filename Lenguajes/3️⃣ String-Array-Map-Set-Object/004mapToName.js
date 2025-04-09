"use strict";

//Tienes un array de objetos bands, cada uno tiene band.name. Escribe el código que lo convierta en un array de nombres. Por ejemplo:
let acdc= { name: "ACDC", age: 25 };

let metallica = { name: "Metallica", age: 30 };

let guns= { name: "Guns and Roses", age: 28 };

let bands = [ acdc, metallica, guns];

// Hacemos un array de objetos con el nombre de las bandas
// let names = [ acdc.name, metallica.name, guns.name ];
let names = bands.map((bands) => bands.name );

alert( names ); 
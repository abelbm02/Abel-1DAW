"use strict";

let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];

 //Meter a Peter Pan al final del array disney.
disney.push({nombre :"Peter Pan", pelicula: "Peter Pan"}); // Añadimos Peter Pan al final del array

 //Pintar el array
disney.forEach((personaje, index) => {
    console.log(`Elemento ${index}: ${personaje.nombre} de la película ${personaje.pelicula}`);
});

 //Meter a El capitán Garfio al principio del array, no olvides la película
disney.unshift({nombre :"Capitán Garfio", pelicula: "Peter Pan"}); // Añadimos El capitán Garfio al principio del array

 //Meter al cocodrilo detrás del capitán, no olvides la película
disney.splice(1, 0, {nombre :"Cocodrilo", pelicula: "Peter Pan"}); // Añadimos el cocodrilo detrás del capitán Garfio

 //Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
disney.forEach((personaje, index) => {
    if (personaje.pelicula === "Peter Pan") {
        console.log(`Elemento ${index}: ${personaje.nombre} de la película ${personaje.pelicula}`)}
});

 //Encontrar el índice de Campanilla.
disney.forEach((personaje, index) => {
    if (personaje.nombre === "Campanilla") {
        console.log(`Elemento ${index}: ${personaje.nombre} de la película ${personaje.pelicula}`);}
});

 //Buscar al cocodrilo.
disney.forEach((personaje, index) => {
    if (personaje.nombre === "Cocodrilo") {
        console.log(`Elemento ${index}: ${personaje.nombre} de la película ${personaje.pelicula}`)}
});

 //Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
shuffle(disney);
console.log(disney);
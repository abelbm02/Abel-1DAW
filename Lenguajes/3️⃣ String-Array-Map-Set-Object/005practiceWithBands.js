"use strict";   

let grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

// 1. Filtra los grupos por género “Heavy Metal”
let gruposR = grupos.filter(grupo => grupo.genero === "Heavy Metal");
console.log("Grupos Heavy Metal:", gruposR); 
// Resultado: [{nombre: "Metallica", genero: "Heavy Metal"}]

// 2. Busca el grupo con nombre “Cold Play”
let cp = grupos.find(grupo => grupo.nombre === "Cold Play");
console.log("Grupo Cold Play:", cp); 
// Resultado: {nombre: "Cold Play", genero: "Pop"}

// 3. Posición del grupo “Cold Play” en el array
let poscp = grupos.indexOf(cp);
console.log("Posición de Cold Play:", poscp); 
// Resultado: 1

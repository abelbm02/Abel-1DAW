"use strict";   

let grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"} 
];
 
 //filtra los grupos por género obtenido aquellos que son de Heavy Metal.
let gruposR = grupos.filter(grupo => grupo.genero === "Heavy Metal");
console.log(gruposR); // [{nombre: "Metallica", genero: "Heavy Metal"}]

 //Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
let cp = grupos.find (grupo => grupo.nombre === "Cold Play"); //{nombre: "Cold Play", genero: "Pop"}
console.log(cp);

 //¿En qué posición del array se encuenta “Cold Play”?
 let poscp = grupos.indexOf(cp); //Posiición 1
 console.log(poscp); 
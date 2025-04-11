"use strict";

//Crea un objeto Map vacío llamado personajesUp.
let personajesUp = new Map();

//Añade al Map los siguientes personajes y sus roles en la película:
personajesUp.set ("Carl Fredricksen", "Protagonista principal");
personajesUp.set ("Russell", "Explorador entusiasta");
personajesUp.set ("Dug", "Perro que habla");
personajesUp.set ("Kevin", "Ave tropical giagante");
personajesUp.set ("Charles Muntz", "Antagonista");

//Muestra por consola el contenido inicial del Map.
console.log("Contenido inicial del Map personajesUp:");
console.log(personajesUp);

//Comprueba con has() si existen los personajes "Russell" y "Alpha" (el perro alfa). Muestra el resultado.
console.log("Russell existe en personajesUp:", personajesUp.has("Russell"));
console.log("Alpha existe en personajesUp:", personajesUp.has("Alpha"));

//Obtén y muestra el rol del personaje "Dug" con get().
console.log("Rol de Dug:", personajesUp.get("Dug"));

//Actualiza el valor asociado a "Russell" a "Explorador leal y valiente" y muestra el nuevo valor.
personajesUp.set("Russell", "Explorador leal y valiente");
console.log("Nuevo rol de Russell:", personajesUp.get("Russell"));

//Elimina al personaje "Charles Muntz" del Map usando delete() y muestra el contenido restante.
personajesUp.delete("Charles Muntz");
console.log("Contenido del Map después de eliminar a Charles Muntz:");
console.log(personajesUp);

//Itera sobre los personajes y sus descripciones con forEach() y muestra cada par formateado así:
//"Carl Fredricksen: Protagonista principal"
personajesUp.forEach((rol, personaje) => {
    console.log(`${personaje}: ${rol}`);
});

//Muestra cuántos personajes hay actualmente en el Map utilizando size.
console.log("Número de personajes en el Map:", personajesUp.size);

//Vacía el Map usando clear() y verifica que esté vacío mostrando su contenido y tamaño.
personajesUp.clear();
console.log("Contenido del Map después de vaciarlo:", personajesUp);

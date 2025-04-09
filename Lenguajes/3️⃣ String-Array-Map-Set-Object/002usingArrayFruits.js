"use strict";

let fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio
fruits.unshift("Cereza"); // Añadimos cereza al principio

//Añadimos melocotón al final
fruits.push("Melocotón"); // Añadimos melocotón al final

//Mostrar el array elemento a elemento con forEach
fruits.forEach((fruit, index) => {
  console.log(`Elemento ${index}: ${fruit}`);
});


//Eliminamos el primer elemento.
fruits.shift(); // Eliminamos el primer elemento.
console.log(fruits);   

//Eliminamos el último elemento.
fruits.pop(); // Eliminamos el último elemento.
console.log(fruits);

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.
for (let fruit of fruits) {
  console.log(fruit); // Mostrar cada elemento con for of
}
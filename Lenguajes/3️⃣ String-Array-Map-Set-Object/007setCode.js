"use strict";

// Crear un Set vacío llamado code.
// En este paso se inicializa una estructura de datos Set que almacenará valores únicos.
let code = new Set();

// Añadir al Set los siguientes elementos (respetando el orden):
// "JavaScript", "Python", "Java", "JavaScript" (duplicado), "C++".
// El Set automáticamente ignora los valores duplicados, por lo que "JavaScript" solo se agregará una vez.
code.add("JavaScript");
code.add("Python");
code.add("Java");
code.add("JavaScript"); // Duplicado, no se añadirá
code.add("C++");


// Mostrar por consola el contenido inicial del Set y observar si se han insertado elementos duplicados.
// Este paso permite verificar visualmente si el Set ha ignorado correctamente el duplicado.
console.log("Contenido inicial del Set:", code);

// Comprobar mediante el método has() si existen los elementos "Java" y "Ruby".
// Este método devuelve un booleano: true si el elemento existe en el Set, false si no.
console.log("¿El Set contiene 'Java'?", code.has("Java")); // true
console.log("¿El Set contiene 'Ruby'?", code.has("Php")); // false 

// Eliminar el elemento "C++" usando el método delete() y mostrar el contenido actualizado.
// El método delete() remueve un elemento específico del Set si existe.
code.delete("C++");
console.log("Contenido después de eliminar 'C++':", code);

// Iterar sobre los elementos del Set utilizando forEach() e imprimir cada elemento por consola.
// Se utiliza forEach() para recorrer y mostrar cada valor presente dentro del Set.
code.forEach((value) => {
    console.log("Elemento:", value);
});

// Mostrar el número total de elementos actuales en el Set utilizando la propiedad size.
// La propiedad size devuelve la cantidad actual de elementos únicos almacenados en el Set.
console.log("Numero de elementos:", code.size);

// Eliminar todos los elementos del Set con el método clear() y mostrar el Set vacío y su nuevo tamaño.
code.clear();

// El método clear() borra todo el contenido del Set, dejándolo completamente vacío.
console.log ("Conetenido después de clear():", code);
console.log ("Tamaño despues del clear():", code.size);
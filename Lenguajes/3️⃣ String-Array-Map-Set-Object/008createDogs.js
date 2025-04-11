"use strict";

//Crear un objeto vacío llamado dog 🐶
let dog = new Object();

//Imprime el objeto dog en la consola
console.log(dog);

//Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog = {
    name: "lola",
    legs: 4,
    color: "brown",
    age: 13,
    bark: function () {
        return "woof woof";
    },
}

//Obtener name, legs, color, age y el valor de bark del objeto dog
console.log(dog.name); //lola
console.log(dog.legs); //4
console.log(dog.color); //brown
console.log(dog.age); //13
console.log(dog.bark()); //woof woof

//Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = "yorkshire";
dog.getDogInfo = function () {
    return `${this.name} es un ${this.breed} perro de color ${this.color} y tiene ${this.age} años.`;
}

console.log(dog.breed); //yorkshire
console.log(dog.getDogInfo()); //lola es un yorkshire perro de color brown y tiene 13 años.
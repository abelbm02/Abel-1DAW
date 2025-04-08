"use strict";

//Declarar los posibles ingredientes
let ingredientes = +prompt("¿Cuántos ingredientes tienes? (2, 3, 4 o 5)");

if (ingredientes == 5){
    alert("Una receta con 5 ingredinetes puede ser, la pasta a la carbonara, cuenta con cebolla, ajo, huevo, queso y panceta.");
    alert("Una receta con 5 ingredientes puede ser, la pizza, cuenta con tomate, queso, jamón, champiñones y aceitunas.");
}
else if (ingredientes == 4){
    alert("Una receta con 4 ingredientes puede ser, la ensalada de atún, cuenta con lechuga, tomate, atún y mayonesa.");
    alert("Una receta con 4 ingredientes puede ser, el guacamole, cuenta con aguacate, cebolla, tomate y limón.");
}
else if (ingredientes == 3){
    alert("Una receta con 3 ingredientes puede ser, la macedonia de frutas, cuenta con manzana, plátano y naranja.");
    alert("Una receta con 3 ingredientes puede ser, el sandwich mixto, cuenta con pan, jamón y queso.");
}
else if (ingredientes == 2){
    alert("Una receta con 2 ingredientes puede ser, un bocadillo de jamón y queso.");
    alert("Una receta con 2 ingredientes puede ser, un batido de plátano y leche.");
}
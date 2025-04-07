"use strict";

// Elige un menú según la comida y si es vegetariano o no
let comida = prompt ("Quiere cenar, almorzar o desayunar?");
let veg = prompt ("Es vegetariano? (si/no)");

// Comida cena, almuerzo o desayuno
// Vegetariano o no
if (comida == "cena" && veg == "si") {
    alert ("Ensalada de lechuga y cebolla");
}
else if (comida == "cena" && veg == "no") {
    alert("Carne asada con papas fritas");
}


if (comida == "almuerzo" && veg == "si") {
    alert ("Lentejas con arroz");
}   
else if (comida == "almuerzo" && veg == "no") {
    alert ("Pollo con verduras al vapor")
}



if (comida == "desayuno" && veg == "si") {
    alert ("Tostadas con aguacate");
}
else if (comida == "desayuno" && veg == "no") {
    alert ("Tostada de jamón y queso")
}
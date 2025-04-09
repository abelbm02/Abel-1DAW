"use strict";

// Elige un menú según la comida y si es vegetariano o no

let comida;
let veg;

comida = prompt ("Quiere cenar, almorzar o desayunar?" );
veg = prompt ("Es vegetariano? (si/no)" );

// Comida cena, almuerzo o desayuno
// Vegetariano o no
if (comida == "cenar" && veg == "si") {
    console.log ("Ensalada de lechuga y cebolla");
}
else if (comida == "cenar" && veg == "no") {
    console.log("Carne asada con papas fritas");
}


if (comida == "almorzar" && veg == "si") {
    console.log ("Lentejas con arroz");
}   
else if (comida == "almorzar" && veg == "no") {
    console.log ("Pollo con champiñones")
}



if (comida == "desayunar" && veg == "si") {
    console.log ("Tostadas con aguacate");
}
else if (comida == "desayunar" && veg == "no") {
    console.log ("Tostada de jamón y queso")
}
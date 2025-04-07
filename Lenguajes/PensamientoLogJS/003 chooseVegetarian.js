"use strict";

let comida = prompt ("Quiere cenar, almorzar o desayunar?");

let veg = prompt ("Es vegetariano? (si/no)");

if (comida == "cena " && veg == "si") {
    console.log ("Ensalada de lechuga y cebolla");
}
else if (comida == "cena" && veg == "no") {
    console.log ("Carne asada con papas fritas");
}

if (comida == "almuerzo" && veg == "si") {
    console.log ("Lentejas con arroz");
}   
else if (comida == "almuerzo" && veg == "no") {
    console.log ("Pollo con verduras al vapor")
};

if (comida == "desayuno" && veg == "si") {
    console.log ("Tostadas con aguacate");
}
else if (comida == "desayuno" && veg == "no") {
    console.log ("Tostada de jamón y queso")
}
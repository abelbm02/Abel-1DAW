"use strict";


//Crea una función-objeto llamada hogwartsStudent que sea capaz de gestionar la siguiente información:
function hogwartsStudents (nombre, casa, mascota, asignaturas, anio, sangre, prefecto) {
    this.nombre = nombre,
    this.casa = casa,
    this.mascota = mascota,
    this.asignaturas = asignaturas,
    this.anio = anio,
    this.sangre = sangre,
    this.prefecto = prefecto;
};

let alumno1 = new hogwartsStudents(
    "Harry Potter", 
    "Gryffindor", 
    "Hedwig", 
    ["Defensa contra las artes oscuras", "Pociones", "Herbología"], 
    2, 
    "sangre pura", 
    true);

let alumno2 = new hogwartsStudents(
    "Hermione Granger",
    "Gryffindor",
    "Crookshanks",
    ["Pociones", "Transformaciones", "Encantamientos"],
    3,
    "mestiza",
    true
);  
//Muestra por consola el nombre completo del estudiante, la casa a la que pertenece y su mascota.
console.log (alumno1.nombre); //Harry Potter
console.log (alumno1.casa); //Gryffindor
console.log (alumno1.mascota); //Hedwig

//Añade una nueva propiedad al objeto llamada patronus y asígnale el valor "Nutria".
alumno2.patronus = "Nutria";

//Agrega una nueva asignatura al array asignaturas, llamada "Defensa Contra las Artes Oscuras".
alumno2.asignaturas.push("Defensa Contra las Artes Oscuras");

//Cambia el valor de la propiedad año a 4.
alumno2.anio = 4;

//Elimina la propiedad sangre del objeto.
delete alumno2.sangre;

//Crea una función printHogwartsStudent que reciba el objeto hogwartsStudent y muestre por consola un resumen como este:
function printHogwartsStudent (alumno) {
    console.log(`${alumno.nombre} es una estudiante de ${alumno.casa} en su ${alumno.anio}. Tiene una mascota llamada ${alumno.mascota} y su patronus es un Caballo. Sus asignaturas son: ${alumno.asignaturas.join(", ")}.
`);

}

printHogwartsStudent(alumno1); 

printHogwartsStudent(alumno2);
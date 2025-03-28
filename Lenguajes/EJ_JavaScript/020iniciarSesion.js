"use strict";

//Declarar variable de entrada
let usuario = prompt("Introduce tu nombre de usuario");

//Condiciones para que el usuario pueda iniciar sesión
if (usuario == "Admin") {
    let contrasena = prompt("Introduce tu contraseña");

    if (contrasena == "" ||contrasena == null) {
        alert("Cancelado");}
    else if (contrasena == "Admin") {
        alert("Bienvenido");}}

else if (usuario == "" || usuario == null) {
    alert("Cancelado");}

else {
    alert("No te conozco");}
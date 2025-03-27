"use strict";

// Declaramos una variable que solicita un valor al usuario
let nombre = prompt('¿Cuál es el nombre “oficial” de JavaScript?');

// Comprobamos si el valor introducido por el usuario es igual a 'ECMAScript'
// Si es igual, mostramos un mensaje de alerta con el texto '¡Correcto!'
if (nombre === 'ECMAScript') {
  alert('¡Correcto!');
} else {
  alert('¿No lo sabes? ¡ECMAScript!');
}
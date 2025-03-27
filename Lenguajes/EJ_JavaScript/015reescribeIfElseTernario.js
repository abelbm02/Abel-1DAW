"use strict";

let message;
let login = 'Alumno';

//Reescribir el siguiente if-else con el operador ternario
message = (login == 'Alumno') ? message = 'Hola estudiante, tiene 10 tareas pendientes' : 
    (login == 'Profesor') ? message = 'Buenos días, tiene que calificar 1000 actividades' :
    (login == '') ? message = 'Sin sesión, estudie algo' : 
    'Usuario no reconocido';

//Mostrar mensaje
alert(message); 
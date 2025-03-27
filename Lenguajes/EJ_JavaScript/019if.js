"use strict";

//(||) devuelve el primer valor true que encuentra, o el último valor si todos son false. Se muetra el primer valor true. TRUE
if (-1 || 0) alert( "primero" );

//(AND) devuelve el primer valor false que encuentra, o el último valor si todos son true. Se muestra el último valor true. FALSE
if (-1 && 0) alert( "segundo" );

//El operador && tiene mayor prioridad que el operador ||, por lo que se evalúa primero. TRUE
if (null || -1 && 1) alert( "tercero" );


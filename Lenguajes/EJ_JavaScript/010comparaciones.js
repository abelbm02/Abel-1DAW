"use strict";

// Resultado true por matematicas
5 > 4

// Resultado false, compara como en el diccionario
"apple" > "microsoft"

// Resultado true compara strings y 2 es mayor que 1
"2" > "12"

// Resultado true (==)convierte los valores al mismo tipo antes de compararlos 
undefined == null

// Resultado false (===) no convierte los valores al mismo tipo antes de compararlos
undefined === null

// Resultado false (==)convierte los valores al mismo tipo antes de compararlos, Null no es una cadena
null == "\n0\n"

// Resultado false (===) ahora todo se convierte a numérico siendo null === 0 y es false
null === +"\n0\n"

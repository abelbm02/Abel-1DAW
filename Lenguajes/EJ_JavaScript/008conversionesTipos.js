"use strict";

// Resultado "10"
"" + 1 + 0

// Resultado -1 
"" - 1 + 0

// Resultado 1
true + false

// Resultado 2
6 / "3"

// Resultado 6
"2" * "3"

// Resultado 9px
4 + 5 + "px"

// Resultado $45
"$" + 4 + 5

// Resultado 2
"4" - 2

// Resultado Nan 4px no se convierte a numero
"4px" - 2

// Resultado " -9 5" se une a el string
" -9 " + 5

// Resultado -14 en cambio con - se hace la resta
" -9 " - 5

// Resultado 1
null + 1

// Resultado Nan
undefined + 1

// Resultado Nan ya que no se pueden convertir a numero una tabulación y una nueva línea
" \t \n" - 2
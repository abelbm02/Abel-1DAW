"use strict";

// Resultado 2 por que es true, || devuelve los true que encuentra
alert( null || 2 || undefined );

// Resultado 1 y 2
alert( alert(1) || 2 || alert(3) );

// Resultado null, ya que && devuelve el primer false que encuentra
alert( 1 && null && 2 );

// Resultado 1 y undefined
alert( alert(1) && alert(2) );

// Resultado 3, primero se evalua 2 && 3, que es 3, luego se evalua 3 || 4, que es 3
alert( null || 2 && 3 || 4 );
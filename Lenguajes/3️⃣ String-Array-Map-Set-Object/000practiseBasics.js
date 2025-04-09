"use strict";

//Array vacio
let arrayVacio = [];

//Array con mas de 5 elementos
let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Encontrar la longuitud del array
let longuitud = array5.length;

//Obtener primer eleemento del array, elemento del medio y el último elemento
let primerElemento = array5[0];
let elementoMedio = array5[Math.floor(array5.length / 2)];
let ultimoElemento = array5[array5.length - 1];

//Array de diferentes datos tam mayor que 5
let mixedDataTypes = [1,"dos",null, 3,{nombre: "Juan", edad: 30}];
//Obtener longuitud del array de diferentes datos
let lomguitudMixed = mixedDataTypes.length;

//Crear un array con 5 elementos de tipo string
let itCompanies = ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//Mostrar el array de 5 elementos por consola
console.log(itCompanies);

//Imprimir numero de empresas en el array
console.log(itCompanies.length);

//Acceder al primer elemento del array
itCompanies[0];
//Acceder al medio del array
itCompanies[Math.floor(itCompanies.length / 2)];
//Acceder al último elemento del array
itCompanies[itCompanies.length - 1];

//Imprimir cada empresa en el array
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i]);
}

//Imprimir el array en mayusculas uno por uno
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase());
}

//Imprimir el array como una oracion, todo seguido
let frase = `${itCompanies.slice(0, -1).join(', ')} y ${itCompanies.slice(-1)} son grandes empresas de TI.`;

//Comprobar que en el array hay una determinada empresa, sie existe la devuelve sino, devuelve un mensaje
let buscarEmpresa = "Facebook";

if (itCompanies.includes(buscarEmpresa)){
    console.log(`${buscarEmpresa} existe en el array`);
}
else{
    console.log(`${buscarEmpresa} no existe en el array`);
}

//Filtrar empresas que contengan la letra 'o' sin metodo filter()
let empresasO = [];
for (let i = 0; i < itCompanies.length; i++){
    if (itCompanies[i].includes("o")){
        empresasO.push(itCompanies[i]);
    }
}
console.log(empresas0);

//Ordenr el array con sort()
let itCompaniesSorted = itCompanies.slice().sort();
console.log(itCompaniesSorted);

//Invertir el array con reverse()
let itCompaniesReversed = itCompanies.slice().reverse();
console.log(itCompaniesReversed);

//Cortar las tres primeras empresas del array
let itCompaniesCortadas = itCompanies.slice(3);
console.log(itCompaniesCortadas);

//Cortar las tres ultimas empresas del array
let itCompaniesCortadasUltimas = itCompanies.slice(0, -3);

//Cortar la empresa o empresas intermedias del array
let empresasIntermedias = itCompanies.slice(1, -1);

//Eliminar la primera empresa del array
let eliminarPrimeraEmpresa = itCompanies.shift();
console.log(itCompanies);

//Eliminar la empresa o empresas intermedias del array
let eliminarIntermedias = itCompanies.splice(1, 3);
console.log(itCompanies);

//Eliminar la última empresa del array
let eliminarUltimaEmpresa = itCompanies.pop();
console.log(itCompanies);


//Eliminar todas las empresas del array
let eliminarTodas = itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
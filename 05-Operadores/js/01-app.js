//Creación y comparación de Booleans
//Operador " = " ---> Operador de asignación
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;
const numero4 = 30;

// Operador mayor a ...
console.log(numero1 > numero3); // false
console.log(numero3 > numero1); // true

//Operador menor a ...
console.log(numero1 < numero3); // true

// Operador mayor o igual a...
console.log(numero4 >= numero3); // true

// Operador menor o igual a...
console.log(numero4 <= numero3); // true

//CASO ESPECIAL
console.log(numero2 <= numero4); // "20" < 30 ---> true

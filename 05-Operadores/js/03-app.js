//Buenas prácticas a la hora de evaluar un booleano

// Undefined
let numero;
console.log(numero); //undefined

console.log(typeof numero); //undefined

// Null
let numero2 = null;
console.log(numero2); //null
// console.log(typeof numero2); //object

console.log(numero == numero2); //true ---> vacio == vacio
console.log(numero === numero2); //false ---> undefined === object


//Más sobre comparaciones de booleanos
const numero1 = 20; //number
const numero2 = "20"; //string
const numero3 = 30; //number

// Revisar si 2 números son iguales
// Operador de igualdad " == "

console.log(numero1 == numero3); // false
console.log(numero1 == numero2); // true

//Uso del comparador estricto " === ", identifica si ambos valores son del mismo tipo y valor
console.log(numero1 === numero2); // 20 === "20" ---> false
console.log(numero1 === parseInt(numero2)); // 20 === 20 ---> true
console.log(typeof numero1); //number
console.log(typeof numero2); //string

//Operador Diferente a... " != "
const password1 = "Admin"; //string
const password2 = "admin"; //string

console.log(password1 != password2); //true porque "Admin" es difente a "admin"
console.log(numero1 != numero2); // 20 es difente a "20" ---> false
console.log(numero1 !== parseInt(numero2)); // 20 es difente a 20 ---> false

//Operador estrictamente difetente a ... "!=="
//Convertir de string a tipo numérico

const numero1 = "20" ; //String ---> number de tipo entero (int)
const numero2 = "20.2"; //String ---> number de tipo flotante (float)
const numero3 = "Uno"; //String ---> No es posible convertir a número
const numero4 = 20;

console.log(typeof numero1); //string
// console.log(typeof numero4); //number

console.log(numero1);
console.log(Number.parseInt(numero1)); //Conversión interna a tipo numérico
console.log(typeof numero1); //Sigue mostrando que es de tipo String
console.log(Number.parseFloat(numero2)); 
console.log(Number.parseInt(numero3)); //NaN = Not a Number (No es un número)
// console.log(numero2);
// console.log(numero3);
// console.log(numero4);
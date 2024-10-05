//Acceder a los elementos de un array
const numeros = [10, 20, 30, 40, 50, [1,2,3]]

console.log(numeros);
console.table(numeros);

console.log(numeros[4]); //50
console.log(numeros[0]); //10
console.log(numeros[20]); //Undefined
console.log(numeros[5][1]); //2
console.log(numeros[5][0]); //3


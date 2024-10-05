//FIZZ BUZZ
//Se tiene una serie de elementos del 0 al 100, todos los elementos que son múltiplos de 3, deben imprimir la palabra FIZZ, y los que son múltiplos de 5 deben imprimir la palabra BUZZ y además los que son múltiplos de 3 y 5 deben imprimir FIZZ BUZZ. Recuerden no tomar en cuenta el número cero.

//Fizz buzz = 30 números sin incluir el cero
//3 6 9 12... fizz
//5 10 15 20... buzz
//15 30 45 ... FIZZBUZZ!

for(let i = 1; i <= 100; i++){
  if( i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FIZZ BUZZ!!!`);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz`);
  } 
  console.log(i);
}

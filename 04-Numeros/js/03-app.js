//Uso del método Math
let resultado;

// PI
resultado = Math.PI

// Redondear de forma general
resultado = Math.round(2.8); //3
resultado = Math.round(2.2); //2
resultado = Math.round(2.6); //3
resultado = Math.round(2.5); //3
resultado = Math.round(2.4); //2

// Redondear hacia arriba (hacia el número entero mayor)
resultado = Math.ceil(2.1); //3

// Redondear hacia abajo (hacia el número entero menor)
resultado = Math.floor(3.9); //3

//Raiz cuadrada
resultado = Math.sqrt(144); //12

// Valor Absoluto (+20, -20) = 20
resultado = Math.abs(-500);

// Potencia (base, exponente)
resultado = Math.pow(2, 4) // 2^4 = 16

//Mínimo
resultado = Math.min(3, 2, 10, 4, 1, -1) // -1

//Máximo
resultado = Math.max(3, 2, 10, 4, 1, -1 ) // 10

//Mostrar números de forma aleatoria
// resultado = Math.random()*10;

resultado = Math.floor( Math.random()*10 )

console.log(resultado);
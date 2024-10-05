//Jerarquía de Operaciones
let resultado1;
let resultado2;


resultado1 = 20 + 30 * 2; // 80, primero realiza la multiplicación y luego la suma

resultado1 = (20 + 30) * 2; //100, primero opera los paréntesis y luego lo que está afuera

// 25% para realizar un descuento en un carrito de compras
resultado1 = (150 + 70 + 40 + 60) * .25; // Forma de calcular descuento #1
resultado2 = (150 + 70 + 40 + 60) * 25 / 100; // Forma de calcular descuento #2


console.log(resultado1);
console.log(resultado2);

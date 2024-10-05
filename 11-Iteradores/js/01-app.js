//FOR LOOP

//1.Inicializador
//2.Condicion que queremos revisar
//3.Veces que quiero que se repita (incremento)
//4.Código interno dentro de las llaves

// for (let i = 0; i < 10; i++) {
//   console.log(`Número: ${i}`);
// }

//Mostrar qué números son pares e impares del 1 al 20
// for(let i = 1; i <= 20; i++) {
//   if( i % 2 === 0) {
//     console.log(`El número de ${i} es PAR`);
//   } else {
//     console.log(`El número de ${i} es IMPAR`);
//   }
// }

const carrito = [
  { nombre: 'Monitor de 27 Pulgadas', precio: 500 },
  { nombre: 'TV', precio: 1500 },
  { nombre: 'Tablet', precio: 350 },
  { nombre: 'Audifonos', precio: 250 },
  { nombre: 'Teclado', precio: 100 },
  { nombre: 'Celular', precio: 2800 },
  { nombre: 'Mousepad', precio: 50}
]

console.log(`Has seleccionado ${carrito.length} artículos`);

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}

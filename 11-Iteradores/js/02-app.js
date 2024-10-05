//BREAK Y CONTINUE
//Break: Corta la ejecución de for loop
//Continue: Nos permite algo así como interceptar un elemento, lo identifica y continua la ejecución.

//Crear un for loop que muestre los números del 0 al 10 y que detenga su ejecución al detectar el elemento número 5.

// for(let i = 0; i<= 10; i++) {
//   if(i === 5) {
//     console.log('C I N C O');
//     continue;
//   }
//   console.log(`Número: ${i}`);
// }

const carrito = [
  { nombre: 'Monitor de 27 Pulgadas', precio: 500, descuento: true },
  { nombre: 'TV', precio: 1500 },
  { nombre: 'Tablet', precio: 350, descuento: true},
  { nombre: 'Audifonos', precio: 250 },
  { nombre: 'Teclado', precio: 100 },
  { nombre: 'Celular', precio: 2800, descuento: true},
  { nombre: 'Mousepad', precio: 50}
]

console.log(`Has seleccionado ${carrito.length} artículos`);

for (let i = 0; i < carrito.length; i++) {
  if(carrito[i].descuento) {
    console.log(`El artículo ${carrito[i].nombre} tiene un súper descuento!!`);
    continue;
  }
  console.log(carrito[i].nombre);
}
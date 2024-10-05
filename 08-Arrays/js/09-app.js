//ITERAR UN ARRAY NO PLANO
const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Televisión', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audífonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700}
]

//Iterar con for loop
for(let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//Iterar con forEach
carrito.forEach( function(producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )

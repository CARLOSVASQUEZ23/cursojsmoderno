//.MAP Para iterar un array
const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Televisión', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audífonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700}
]

//Iterar con forEach
carrito.forEach( producto => `${producto.nombre} - Precio: ${producto.precio}` )

//Iterar con .map
const nuevoArreglo2 = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}` )

console.log(nuevoArreglo2);
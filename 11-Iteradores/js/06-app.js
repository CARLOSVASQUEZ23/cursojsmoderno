// .forEach y .map

// forEach
const pendientes = ['Comer', 'Proyecto', 'Estudiar JS']

// pendientes.forEach( pendiente => console.log(pendiente))

// pendientes.forEach( (pendiente, indice) => {
//   console.log(`${indice} : ${pendiente}`);
// })


const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Televisión', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audífonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700}
]

const nuevoArreglo = carrito.forEach(producto => producto.precio)

const nuevoArreglo2 = carrito.map(producto => producto.precio )

console.log(nuevoArreglo);
console.log(nuevoArreglo2);


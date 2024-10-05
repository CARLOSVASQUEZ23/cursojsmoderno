//For Of
const pendientes = ['Comer', 'Proyecto', 'Estudiar JS']

const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Televisión', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audífonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700}
]

for ( let tareas of pendientes ) {
  console.log(tareas);
}

for ( let producto of carrito ) {
  console.log(producto.nombre);
}
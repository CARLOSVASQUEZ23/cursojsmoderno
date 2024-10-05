//Crear un arreglo con el spread/rest operator
const carrito = [];

//Definir productos
const producto1 = {
  nombre: 'Monitor de 32 pulgadas',
  precio: 500
}

const producto2 = {
  nombre: 'Celular',
  precio: 1200
}

const producto3 = {
  nombre: 'Teclado',
  precio: 150
}

const producto4 = {
  nombre: 'Mouse inalámbrico',
  precio: 125
}

const producto5 = {
  nombre: 'Bocinas',
  precio: 450
}

//carrito.push(producto4);
//carrito.push(producto1);
//console.table(carrito);

//Forma DECLARATIVA
let copiaCarrito;

copiaCarrito = [...carrito, producto1]; //0 - MONITOR DE 32 PULGADAS - 500
copiaCarrito = [...copiaCarrito, producto2]; //0 - MONITOR DE 32 PULGADAS - 500

//AGREGAR UN PRODUCTO AL INICIO SIN MÉTODOS
copiaCarrito = [producto5, ...copiaCarrito];

//AGREGAR UN PRODUCTO AL FINAL DE UN ARRAY SIN MÉTODOS
copiaCarrito = [...copiaCarrito, producto3];

console.table(copiaCarrito);
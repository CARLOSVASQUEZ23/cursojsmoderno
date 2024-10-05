const carrito = [];

//Definir productos
const producto1 = {
  nombre: 'Monitor de 32 pulgadas',
  precio: '500'
}

const producto2 = {
  nombre: 'Celular',
  precio: '1200'
}

const producto3 = {
  nombre: 'Teclado',
  precio: '150'
}

const producto4 = {
  nombre: 'Mouse inalámbrico',
  precio: '125'
}

const producto5 = {
  nombre: 'Bocinas',
  precio: 450
}

//Agregar objetos a mi carrito vacío
carrito.push(producto2);
carrito.push(producto1);
carrito.unshift(producto3);

console.table(carrito);
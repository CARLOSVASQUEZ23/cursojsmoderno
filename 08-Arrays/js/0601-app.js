//FORMA DECLARATIVA
const carrito = []

//Definir productos
const producto1 = {
  nombre: 'Estufa',
  precio: 1850
}

const producto2 = {
  nombre: 'Refrigerador',
  precio: 2000
}

const producto3 = {
  nombre: 'Licuadora',
  precio: 650
}

//Ordenar el carrito sin métodos
let compra;

//mostrar el producto1 en la posición 0
compra = [...carrito, producto1];
//mostrar el producto3 en la posición 0 y el producto1 en la posición 1
compra = [producto3, producto1];
//mostrar el producto2 en la posición 0, el producto3 en la posición 1 y el producto1 en la posición3
compra = [producto2, producto3, producto1];

console.table(compra);
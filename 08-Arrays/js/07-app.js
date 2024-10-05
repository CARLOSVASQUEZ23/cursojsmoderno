//ELIMINAR ELEMENTOS DE UN ARRAY CON MÉTODOS
const carrito = [];

//Definir productos
const producto1 = {
  nombre:  "Monitor de 32 pulgadas",
  precio: 400
}

const producto2 = {
  nombre: "Celular",
  precio: 800
}

const producto3 = {
  nombre: 'Tablet',
  precio: 750
}

const producto4 = {
  nombre: 'Cable de poder',
  precio: 35
}



carrito.push(producto2); //0
carrito.push(producto1); //1
carrito.push(producto3); //2
carrito.push(producto4); //3

// console.table(carrito);

//Eliminar el último elemento de un arreglo
// carrito.pop();

// console.table(carrito);

// carrito.pop();

// console.table(carrito);

console.table(carrito);

//Eliminar el primer elemento de un arreglo
// carrito.shift();
// console.table(carrito);

//Eliminar elementos en cualquier posición del arreglo

carrito.splice(2,1)
console.table(carrito);
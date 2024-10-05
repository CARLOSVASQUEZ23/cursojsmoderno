//Destructuring Objects

//Object literal (Objeto literal)
const producto = {
  nombre : "JuanitaTV",
  precio : 300,
  disponibles : true
}

//Asignar una variable a un valor del objeto (forma antigua de asignar)
//const nombre = producto.nombre;
//console.log(nombre);

//Asignar una variable a un valor del objeto (forma actual)
const { precio, nombre, disponible } = producto;
console.log(precio);
console.log(nombre);
console.log(disponible);

//ejemplo de Destructuring con objetos literales
const carro = {
  marca : 'BMW',
  color : 'gris',
  precio2 : 50000,
  caballosFuerza : 2000, 
}

//Destructuring
const { marca, color, precio2, caballosFuerza, noExiste } = carro;
console.log(marca);
console.log(color);
console.log(precio2);
console.log(caballosFuerza);
console.log(noExiste);
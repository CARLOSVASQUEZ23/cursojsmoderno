//Object Literal (Objetos literales)
const producto = {
  nombre : "Monitor curvo de 20 pulgadas",
  precio : 300,
  disponible: true
}

//Object Constructor (Constructor de objetos)
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto('Monitor de 24 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Radio', 150);
console.log(producto3);

const producto4 = new Producto("Tablet", 600);
console.log(producto4);

const producto5 = new Producto("Celular", 2000);
console.log(producto5);
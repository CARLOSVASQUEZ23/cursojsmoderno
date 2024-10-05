//Object literal (Objeto literal)
const producto = {
  nombre : "JuanitaTV",
  precio : 300,
  disponibles : true
}

//Agregar nuevas propiedades al objeto (por fuera)
producto.imagen = "tv.jpg";
producto.aliados = "Distelsa";

//console.log(producto);

//Eliminar nuevas propiedades del objeto (por fuera)
delete producto.precio;
delete producto.aliados;
console.log(producto);
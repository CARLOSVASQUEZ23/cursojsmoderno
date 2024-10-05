//Modo estricto y OBJECT METHODS
"use strict";

const producto = {
  nombre : "Monitor curvo de 20 pulgadas",
  precio : 300,
  disponible: true
}

//Sellar un objeto
Object.seal( producto )

producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);

console.log(Object.isSealed( producto ));
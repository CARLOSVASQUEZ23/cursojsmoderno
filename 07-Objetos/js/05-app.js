//Crear objetos dentro de otros objetos (anidar)
const producto = {
  nombre: "Monitor curvo de 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion : {
    medidas: {
      peso: '5kg',
      medida: '1m'
    },
    fabricacion : {
      pais: 'China',
      fecha: "2024"
    }
  }
}

//Acceder a país usando la sintaxis de punto
console.log(producto.informacion.medidas.altura);

//Agregar propiedades a un objeto anidado
producto.informacion.fabricacion.aprobacion = true;
console.log(producto.informacion.fabricacion.aprobacion);
//Destructuración en ojetos anidados
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

//Destructuración
// const { nombre, informacion, informacion : {medidas} } = producto;
// console.log(nombre);
// console.log(informacion);
// console.log(medidas);

//Acceder a pais por medio de destructuracion
// const { informacion : { fabricacion : {pais} } } = producto;
// console.log(pais);

const { informacion : { medidas : { medida } }, informacion : { fabricacion : {fecha} }} = producto;
console.log(medida);
console.log(fecha);
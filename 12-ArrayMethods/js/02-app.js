//.findIndex <>
const meses = ['Enero','Febrero','Marzo','Abril', 'Mayo','Junio', 'Julio']


const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 1000},
    {nombre: 'Televisión', precio: 1000},
    {nombre: 'Tablet', precio: 1000},
    {nombre: 'Audífonos', precio: 1000},
    {nombre: 'Teclado', precio: 1000},
    {nombre: 'Celular', precio: 1000}
  ]


  /*const i = meses.findIndex(mes => mes === 'Abril')
  console.log(i);*/
//Encontrar un indice de un arreglo de objetos usando FINDINDEX

const i = carrito.findIndex( producto => producto.precio === 100);
console.log(i);
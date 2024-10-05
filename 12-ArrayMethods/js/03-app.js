//.reduce <>

const meses = ['Enero','Febrero','Marzo','Abril', 'Mayo','Junio', 'Julio']


const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 100},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 7000}
  ]

  //decirle a un usuario cuanto tiene que pagar con un forEach

  let total = 0;

  carrito.forEach( prodructo => total += prodructo.precio );
  console.log(total);

  //decirle a un usuario cuanto tiene que pagar con un .reduce

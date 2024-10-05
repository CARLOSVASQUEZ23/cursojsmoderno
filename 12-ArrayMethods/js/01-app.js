//.some

const meses = ['Enero','Febrero','Marzo','Abril', 'Mayo','Junio', 'Julio']


const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
  ]

/*//Comprobar si un valor existe en un arreglo

meses.forEach((mes) => {
    if (mes === 'Enero') {
        console.log('Enero si existe');
    }
});

//Comprobar si un valor existe en un arreglo
const resultado = meses.includes('Enero');
console.log(resultado); <>*/



//const existe = carrito.some( producto => producto.nombre === 'Celular');

const existe2 = meses.some (mes => mes === 'Febrero')
console.log(existe2);
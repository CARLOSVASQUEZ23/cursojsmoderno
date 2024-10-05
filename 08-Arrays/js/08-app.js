//DESTRUCTURING ARRAYS (Destructuración de Arreglos)
const producto = {
  nombre : 'Monitor',
  precio: 600,
  disponible:  true
}

//Destructuring Objects
const { nombre } = producto;
console.log( nombre );



//Destructuring Arrays
const numeros = [10, 20, 30, 40, 50];

const [ x, , y, , z ] = numeros;
console.log(x,y,z);


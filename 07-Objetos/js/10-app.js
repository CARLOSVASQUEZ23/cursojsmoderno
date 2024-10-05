//UNIR 2 OBJETOS
const producto = {
  nombre : "Monitor curvo de 20 pulgadas",
  precio : 300,
  disponible: true
}

const medidas = {
  peso: '1kg',
  medida: '1m'
}

//Unir objetos con "assign" = asignar

console.log(producto);
console.log(medidas);

const resultado = Object.assign( producto, medidas );
console.log(resultado);

//Unir objetos con "Spread Operator o Rest Operator"
const resultado2 = { ...producto, ...medidas }
console.log(resultado2);
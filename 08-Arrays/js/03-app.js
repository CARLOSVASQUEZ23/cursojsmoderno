//Recorrer arrays
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table(meses)

  console.table(meses[1]);
  console.table(meses[5]);
  console.table(meses[4]);

// Cuánto mide el arreglo, es decir, cuántos elementos componen mi arreglo
//console.log(meses.length); //6

//For Loop ----> se compone de 3 parámetros:
for( let i = 0; i < meses.length; i++ ) {
  console.log( i, meses[i]);
}

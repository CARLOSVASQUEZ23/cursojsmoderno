//Operador OR para que se cumpla AL MENOS una condición.
const efectivo = 300;
const tarjeta = 400;
const saldoDisponible = efectivo + tarjeta;
const totalAPagar = 700;

if(efectivo >= totalAPagar || tarjeta >= totalAPagar || saldoDisponible >= totalAPagar) {
  console.log('Sí podemos pagar');
} else {
  console.log('Fondos insuficientes');
}
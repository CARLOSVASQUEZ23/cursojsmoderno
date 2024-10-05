// Mayor o igual y else if
const dineroEfectivo = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;


if (dineroEfectivo >= totalAPagar){
  console.log('Sí podemos pagar en efectivo');
} else if (tarjeta) {
  console.log('Sí puedo pagar porque tengo la tarjeta');
} else if (cheque) {
  console.log('Sí tengo cheque');
} else {
  console.log('Fondos insuficientes');
}

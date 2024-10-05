// Switch case
const metodoDePago = 'tarjeta';

switch (metodoDePago) {
  case 'efectivo':
    pagar();
    break;
  case 'cheque':
    pagar2();
    break;
  case 'tarjeta':
    pagar3();  
    break;
  default:
    console.log('Aún no has seleccionado un método de pago o método de pago no soportado');
    break;  
}

function pagar() {
  alert("pagando con efectivo...");
}

function pagar2() {
  alert("pagando con cheque...");
}

function pagar3() {
  alert("pagando con tarjeta...");
}
//Retorno de valores
function sumar (a, b) {
  return a + b; //20
}
const resultado = sumar (10, 10);
console.log( resultado );

//Ejemplo avanzado de return
let total = 0; //inicializando mi variable "total"
function agregarCarrito( precio ){
  return total += precio; //+= asignación de suma
}
function calcularImpuesto( total ) {
  return total * 1.12; 
}
function calcularDescuento ( total ) { //Q150
  return total * 0.25;
}
function totalNeto( pagoImpuesto ) { 
  return pagoImpuesto - descuento; 
}
function totalEnvio ( pagoFinal ) {
  return pagoFinal + 25 ;
}

total = agregarCarrito( 100 );
total = agregarCarrito( 200 );
total = agregarCarrito( 300 );

const pagoImpuesto = calcularImpuesto( total );
const descuento = calcularDescuento( total );
const pagoFinal = totalNeto ( pagoImpuesto );
const envio = totalEnvio( pagoFinal );

console.log(`El total es de: ${total}` );
console.log(`El total a pagar con impuestos es de: ${pagoImpuesto}`);
console.log(`El descuento sobre su compra es de: ${descuento}`);
console.log(`El TOTAL a pagar por el cliente será: ${pagoFinal}`);
console.log(`El TOTAL más el envío es igual a: ${envio}`);


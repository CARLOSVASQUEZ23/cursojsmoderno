//OPERADOR TERNARIO
// ? = IF
// : = ELSE

// const autenticacion = true;
// if (autenticacion) {
//   console.log('El usuario está autenticado');
// } else {
//   console.log('Usuario NO autenticado');
// }

// const autenticado = false;
// console.log(autenticado ? 'El usuario está autenticado' : 'No autenticado');

//AND con Operador ternario
// const autenticado = true;
// const puedePagar = true;
// console.log(autenticado && puedePagar ? 'Sí puedes ver la película' : 'No puedes ver la película');

//OR con Operador Ternario
// const autenticado2 = false;
// const puedePagar2 = false;
// console.log(autenticado2 || puedePagar2 ? 'Sí puedes ver la película' : 'No puedes ver la película');

const efectivo = 800;
const tarjeta = 400;
const disponible = efectivo + tarjeta;
const totalAPagar = 1201;

// if (efectivo >= totalAPagar || tarjeta >= totalAPagar || disponible >= totalAPagar) {
//   if(efectivo >= totalAPagar) {
//     console.log('Sí pagaste con efectivo');
//   } else {
//     console.log('Otra forma de pago: tarjeta más efectivo');
//   }
// } else {
//   console.log('Fondos insuficientes');
// }

// console.log(efectivo >= totalAPagar ? 'Sí pagaste con efectivo' : 'Fondos insuficientes' || disponible >= totalAPagar ? 'Pagaste con ambas' : 'Fondos insuficientes');

// 0 - 800 = si pagaste con efectivo
// 801 - 1200 = otra forma de pago: tarjeta más efectivo
// 1201 en adelante: Fondos insuficientes
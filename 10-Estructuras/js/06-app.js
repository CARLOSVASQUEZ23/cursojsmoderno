//Operador && ---> Operador AND
const usuario = true;
const puedePagar = false;

if (usuario && puedePagar) { //1) true, true
  console.log('Sí puedes ver la película completa');
} else if( !usuario && !puedePagar) {
  console.log('No tienes cuenta y no tienes fondos'); // 2) false, false
} else if(!usuario) { //3) false true
    console.log('Inicia Sesión o crea una cuenta');
} else if(!puedePagar) { //4) true false
    console.log('Fondos insuficientes');
}

//Si el usuario no puede pagar y tampoco es usuario registrado mostrar el mensaje que no cumple con los requisistos para ver la película modificando una línea de código.

//1) true true PRIORIDAD ALTA
//2) false false PRIORIDAD MEDIA ALTA
//3) true false PRIORIDADES MEDIA
//4) false true PRIORIDAD MEDIA


//el orden de prioridad es IMPORTANTE para los operadores, en este caso para el operador AND porque mi código se ejecuta de arriba hacia abajo y línea por línea.

//DETENER LA EJECUCIÓN DE UN IF CON UNA FUNCIÓN
// const autenticacion = true;

// if (autenticacion) { //No es necesario escribir "=== true" porque da por hecho que el valor de autenticación es TRUE sin necesidad de escribirlo.
//   console.log('El usuario NO está autenticado');
// }

// const puntaje = 900;

// if(puntaje >= 1000) {
//   console.log('Tu puntaje es excelente!!...');
// } else if (puntaje >= 900) {
//   console.log('Casi estás en lo excelente...');
// } else if (puntaje >= 800) {
//   console.log('Buen puntaje!, felicidades!');
// }

const puntaje = 2;

function revisionDePuntaje() {

  if (puntaje >= 400 ) {
    console.log('Excelente!!');
    return;
  }

  if (puntaje >= 300 ) {
    console.log('Buen puntaje');
    return;
  }

  if (puntaje >= 200 ) {
    console.log('Bien');
    return;
  }

  if (puntaje >= 100 ) {
    console.log('Sigue mejorando');
    return;
  }

  if (puntaje >= 0 ) {
    console.log('Debes practicar más');
    return;
  }
}

revisionDePuntaje();
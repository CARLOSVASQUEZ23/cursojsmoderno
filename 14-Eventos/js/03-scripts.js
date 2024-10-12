//Eventos sobre los INPUTS o eventos con el teclado
const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//   console.log('escribiendo...');
// })

// busqueda.addEventListener('keyup', () => { //se registra cuando suelto la tecla
//   console.log('soltaste la tecla');
// })

// busqueda.addEventListener('blur', () => {
//   console.log('terminaste de escribir en el formulario y saliste del área');
// })

// busqueda.addEventListener('copy', () => { //Registra cuando copiamos con CTRL+C
//   console.log('copiaste algo');
// })

// busqueda.addEventListener('paste', () => { //Registra cuando pegar con CTRL+V
//   console.log('pegaste algo');
// })

// busqueda.addEventListener('cut', () => { //Registra cuando cortar con CTRL+X
//   console.log('cortaste algo');
// })

// busqueda.addEventListener('input', () => { //abarca los eventos que vimos excepto blur
//   console.log('registrando eventos con el teclado');
// })

busqueda.addEventListener('input', (e) => { //Registrar lo que el usuario escribe
  if(e.target.value === '') {
      alert('El campo está vacío, falló la validación');
  }
 
})
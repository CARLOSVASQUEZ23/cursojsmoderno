// Eventos con el SCROLL
// window.addEventListener('scroll', () => {
//   const scrollPX = window.scrollY; //scrollY detecta el movimiento en vertical
//   console.log(scrollPX);
// })

// DETECTAR UNA SECCIÓN EN ESPECÍFICO
// window.addEventListener('scroll', () => {

//   const premium = document.querySelector('.premium');
//   const ubicacion = premium.getBoundingClientRect();

//   // console.log(ubicacion); //debugging para detectar coordenadas

//   if(ubicacion.top < 584) {
//     console.log('El elemento ya está visible');
//   } else {
//     console.log('Aún no está visible, tienes que dar más scroll');
//   }
// })
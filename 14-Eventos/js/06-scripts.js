//Event Bubbling o Evento burbuja

const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

cardDiv.addEventListener('click', e => {
  e.stopPropagation();
  console.log('diste click en card');
})

infoDiv.addEventListener('click', e => {
  e.stopPropagation();
  console.log('diste click en información');
})

titulo.addEventListener('click', e => {
  e.stopPropagation();
  console.log('diste click en el título');
})
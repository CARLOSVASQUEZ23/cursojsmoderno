//Técnica DELEGATION para el Event Bubbling
const cardDiv = document.querySelector('.card')

cardDiv.addEventListener('click', e => {
 
  if(e.target.classList.contains('titulo')) {
      console.log('Diste click en título');
  }
  if(e.target.classList.contains('precio')) {
    console.log('Diste click en el precio');
  }
  if(e.target.classList.contains('concierto')) {
    console.log('Diste click en concierto');
  }
  if(e.target.classList.contains('card')) { 
    console.log('clic en CARD');
  }

});
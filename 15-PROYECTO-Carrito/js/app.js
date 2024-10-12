//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregan un curso presionando "AGREGAR AL CARRITO"
    listaCursos.addEventListener('click', agregarCurso)
}


//Funciones
function agregarCurso(e) {
  e.preventDefault();


  if (e.target.classList.contains('agregar-carrito') ) {     
     const cursoSeleccionado = e.target.parentElement.parentElement //DIVCARD
     leerDatosCurso(cursoSeleccionado);
  }

}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
    console.log(curso);

    // Crear un objeto con el contenudo del curso actual
    const infoCurso = {
      imagen: curso.querySelector('img').src,
      titulo: curso.querySelector('h4').textContent,
      precio: curso.querySelector('.precio span').textContent,
      id: curso.querySelector('a').getAttribute('data-id'),
      cantidad: 1
    }

    //Agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
    //articulosCarrito = articulosCarrito.push(infoCurso)

    console.log(articulosCarrito);

    carritoHTML()
}

//Muestra el carrito de compras en el html
function carritoHTML(){

  //Limpiar el html
  limipiarHTML()

  //Recorre el carrito y genera el html
  articulosCarrito.forEach(curso => {
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>
      ${curso.titulo}
    <td/>
    `;

    //Agregar el carrito al html
    contenedorCarrito.appendChild(row)
  })
}


//Elimina los cursos de tbody

function limipiarHTML(){
  // forma lenta
  // contenedorCarrito.innerHTML = '';

  while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }

}

//<>


//Crear un reproductor de música
const reproductor = {
  cancion : '',
  album : '',
  genero : '',
  reproducir : id => `Reproduciendo canción con el id: ${id}`,
  pausa : id => `Pausando canción con el id: ${id}`,
  borrar : id => `Eliminando canción con el id: ${id}`,
  crearPlaylist : nombre => `Creando la Playlist: ${nombre}`,
  reproducirPlaylist : nombre => `Reproduciendo la Playlist: ${nombre}`,

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}...`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },

  set nuevoAlbum(album) {
    this.album = album;
    console.log(`Añadiendo nuevo album: ${album}...`);
  },
  get obtenerAlbum() {
    console.log(`${this.album}`);
  },

  set nuevoGenero(genero) {
    this.genero = genero;
    console.log(`Añadiendo nuevo genero: ${genero}...`);
  },
  get obtenerGenero() {
    console.log(`${this.genero}`);
  }
}

//set: Es una forma de agregar valores que EL USUARIO QUIERA
//get: Es una forma de obtener de vuelta esos valores
reproductor.nuevaCancion = 'Las mañanitas';
reproductor.obtenerCancion;

reproductor.nuevoAlbum = "Pa San Lucas";
reproductor.obtenerAlbum;

reproductor.nuevoGenero = "Rock en español";
reproductor.obtenerGenero;



console.log(reproductor.reproducir(20));
console.log(reproductor.reproducir(30));
console.log(reproductor.pausa(30));
console.log(reproductor.borrar(30));
console.log(reproductor.crearPlaylist('Verano'));
console.log(reproductor.crearPlaylist('Rock'));
console.log(reproductor.reproducirPlaylist('Verano'));
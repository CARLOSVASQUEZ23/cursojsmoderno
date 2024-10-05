//Crear un reproductor de música
const reproductor = {
  reproducir : function(id) {
    console.log(`Reproduciendo canción con el id: ${id}`);
  },
  pausa : function(id) {
    console.log(`Pausando canción con el id: ${id}`);
  },
  borrar : function(id) {
    console.log(`Eliminando canción con el id: ${id}`);
  },
  crearPlaylist : function(nombre) {
    console.log(`Creando la Playlist: ${nombre}`);
  },
  reproducirPlaylist : function(nombre) {
    console.log(`Reproduciendo la Playlist: ${nombre}`);
  }
}

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausa(30);
reproductor.borrar(30);
reproductor.crearPlaylist('Verano');
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('Verano')
//COMUNICACIÓN ENTRE FUNCIONES

iniciarApp();

function iniciarApp() {  //1 minuto en iniciar
 console.log('Iniciando app...');
 //llamado de la segunda función
 segundaFuncion();
}

function segundaFuncion() { //1minuto en iniciar
  console.log('Cargando datos desde la segunda función...');
  usuarioAutenticado();
}

function usuarioAutenticado() {
  console.log('Autenticando usuario ... espere un momento');
  console.log('Usuario autenticado exitosamente');
}



iniciarSistemaBios();

function iniciarSistemaBios() {
  console.log("inicio bios...");
  iniciarSistemaWindows();
}

function iniciarSistemaWindows() {
  console.log("Inicio Windows");
}
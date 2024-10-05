//Espacios en blanco
const producto = "          Monitor de 20 Pulgadas          ";

console.log(producto);
console.log(producto.length);

//Eliminar espacios en blanco del inicio
console.log( producto.trimStart() );

//Eliminar espacios en blanco del final
console.log( producto.trimEnd() );

//Eliminar espacios al inicio y al final en cadena con métodos
console.log( producto.trimStart().trimEnd() );

//Método general para eliminar espacios en blanco 
console.log( producto.trim() );
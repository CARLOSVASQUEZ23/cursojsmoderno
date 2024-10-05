const producto = "Monitor de 20 Pulgadas ";

//Método para repetir una cadena de texto una o más veces .repeat()

const texto = "En oferta ".repeat(2.4) //Toma el número entero 2

console.log(texto);

//PREGUNTA: ¿Qué hace .repeat si le pasamos un número que no es entero?: Toma el entero y omite los decimales

console.log(`${producto} ${texto}!!!!`);

//Método para dividir un string .split()
const actividad = "Estoy en clases extras de JavaScript del CFP";
console.log(actividad.split(" ")); //Cada que encuentra un espacio, extrae la palabra

const hobbies = "Leer, caminar, jugar, trotar, aprender a programar, etc."
console.log(hobbies.split(", ")); //Extrae las palabras omitiendo lo indicado, en este caso la coma(,) y el espacio( )
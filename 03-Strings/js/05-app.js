const producto = "Monitor de 20 Pulgadas";

// Método para reemplazar .replace(parámetro1, parámetro2)
console.log(producto);
console.log(producto.length);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// Método para cortar cadenas de texto .slice()
console.log(producto.slice( 0 , 10 ));
console.log(producto.slice( 8 )); // .slice(8, 22)
console.log(producto.slice( 2 , 1 )); // NADA porque el parámetro de inicio siempre debe ser menor al del final

// Alternativa a .slice()
console.log(producto.substring(0 , 10));
console.log(producto.substring(2 , 1)); //Lo interpreta y lo ordena a .substring(1,2)

//PREGUNTA DE ENTREVISTA DE TRABAJO: ¿Diferencia entre .slice y .substring?: Si le pasa un parámetro mayor de inicio a slice este NO HACE NADA, pero .substring lo interpreta y modifica el orden, entiende por ejemplo que en vez de los parámetros (2,1) es (1,2).

const usuario = "José"
console.log(usuario.substring(0 , 1)); //Extrae la posición 0

//Alternativa para extraer un sólo caracter
console.log(usuario.charAt(0)); //Extrae la posición 0


//Ventajas de las arrow functions
const aprendiendo = function(lenguaje, lenguaje2) {
  console.log(`Aprendiendo a programar en: ${lenguaje} y ${lenguaje2}`);
}
aprendiendo('JavaScript', 'Node.js')

//Función de flecha
const aprendiendo2 = (lenguaje, lenguaje2) => `Aprendiendo a programar en: ${lenguaje} y ${lenguaje2}`;
console.log(aprendiendo2('JavaScript', 'Node.js'));
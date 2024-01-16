/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

export const getLongWords = function (LongWords) {
  // Función para devolver palabras de longitud mayor o igual a 5
  const longLanguages = []; // Array que contendrá las palabras con longitud mayor o igual a 5
  const collectionLenght = LongWords.length; // Longitud del array de entrada 'LongWords'

  for (let index = 0; index < collectionLenght; index++) {
    // Bucle 'for' para iterar sobre cada palabra en 'LongWords'
    const language = `${LongWords[index]}`; // Asignación de la palabra actual a la variable 'Language'

    if (language.length >= 5) {
      // Verificación de la longitud y agregado al array 'longLanguages'
      longLanguages.push(language);
    }
  }

  return longLanguages; // Devolución del array con las palabras de longitud mayor o igual a 5
};

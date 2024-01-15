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
  const longLanguages = [];
  const collectionLenght = LongWords.length;

  for (let index = 0; index < collectionLenght; index++) {
    const Language = `${LongWords[index]}`;

    if (Language.length >= 5) {
      longLanguages.push(Language);
    }
  }
  return longLanguages;
};

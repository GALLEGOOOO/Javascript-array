/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capitalizeMates = function (mates) {
  const matesCapitalLetter = mates.map((element) => {
    const capitalLetter = element.charAt(0).toUpperCase();
    const restOfTheWord = element.slice(1).toLowerCase();

    return `${capitalLetter}${restOfTheWord}`;
  });

  return matesCapitalLetter;
};

export default capitalizeMates;

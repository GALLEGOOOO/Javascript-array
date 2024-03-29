/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

const sumNumbersFromInitialValue = function (numbers, inicial) {
  let suma = inicial;

  const collectionLength = numbers.length;
  for (let index = 0; index < collectionLength; index++) {
    suma += numbers[index];
  }

  return suma;
};

export default sumNumbersFromInitialValue;

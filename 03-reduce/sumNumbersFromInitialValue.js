/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

const sumNumbersFromInitialValue = function (initialValue) {
  const partialResult = initialValue;

  let result = NUMBERS.reduce((partialResult, currentValue) => {
    return currentValue + partialResult;
  }, partialResult);

  return result;
};

export default sumNumbersFromInitialValue;

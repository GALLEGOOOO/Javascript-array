const SECONDS = [2, 5, 100];

/**
 
Transform a given number to a string
@param {number} seconds given in type number
@returns {string} return seconds in type string
*/

export const transformSecondsToWords = () => {
  const secondAsWordArray = SECONDS.map((second) => {
    return second.toString();
  });
  return secondAsWordArray;
};

/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

export const feedMonkeys = function (fruit) {
  const monkeys = [];
  const collectionLenght = monkeys.length;

  for (let index = 0; index < collectionLenght; index++) {
    const monkey = `${monkeys[index]} ${fruit}`;
    monkeys.push(monkey);
  }
  return monkeys;
};

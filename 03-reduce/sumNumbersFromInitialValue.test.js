import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue.js";

describe("Given sumNumbersFromInitialValue", () => {
  test("when an initial value is provided, then the expected sum value should be returned", () => {
    const NUMBERS = [1, 2, 3, 4, 5];

    const initialValueZero = 0;
    const expectedSumZero = 15;

    const sumResultZero = sumNumbersFromInitialValue(initialValueZero);

    expect(sumResultZero).toBeDefined();
    expect(sumResultZero).toEqual(expectedSumZero);

    const initialValueTen = 10;
    const expectedSumTen = 25;

    const sumResultTen = sumNumbersFromInitialValue(initialValueTen);

    expect(sumResultTen).toBeDefined();
    expect(sumResultTen).toEqual(expectedSumTen);
  });
});

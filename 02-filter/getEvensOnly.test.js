import getEvensOnly from "./getEvensOnly.js";

describe("Given getEvensOnly", () => {
  test("when an array of numbers is given as an argument, then the expected array with even numbers should be returned", () => {
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];
    const EXPECTED_RESULT = [2, 12, 42, 28];

    const evenNumbers = getEvensOnly(COUNTERS);

    expect(evenNumbers).toBeDefined();
    expect(evenNumbers.length).toEqual(4);
    expect(evenNumbers).toEqual(EXPECTED_RESULT);
  });
});

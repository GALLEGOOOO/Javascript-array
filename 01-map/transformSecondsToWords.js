import { transformSecondsToWords } from "./transformSecondsToWords";

describe("Given transformSecondsToWords", () => {
  test("When SECONDS array is provided as an argument. Then expected array should be returned", () => {
    // Arrange
    const SECONDS = [2, 5, 100];
    const expectedResult = ["2", "5", "100"];

    // Act
    const result = transformSecondsToWords(SECONDS);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual(expectedResult);
  });
});

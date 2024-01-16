import { getLongWords } from "./getLongWords.js";

describe("Given getLongWords", () => {
  test("When LANGUAGES array is provided as argument. Then expected array should be returned", () => {
    // Arrange
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const expectedResultLanguages = ["JavaScript", "TypeScript"];

    // Act
    const longLanguages = getLongWords(LANGUAGES);

    // Assert
    expect(longLanguages).toBeDefined();
    expect(longLanguages).toEqual(expectedResultLanguages);
  });

  test("When BEATLES array is provided as argument. Then expected array should be returned", () => {
    // Arrange
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const expectedResultBeatles = ["George", "Ringo"];

    // Act
    const longBeatles = getLongWords(BEATLES);

    // Assert
    expect(longBeatles).toBeDefined();
    expect(longBeatles).toEqual(expectedResultBeatles);
  });
});

import getLongWords from "./getLongWords.js";

describe("Given getLongWords", () => {
  test("when an array of strings is given as an argument, then the expected array should be returned", () => {
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const BEATLES = ["John", "George", "Paul", "Ringo"];

    const expectedLanguagesResult = ["JavaScript", "TypeScript"];
    const expectedBeatlesResult = ["George", "Ringo"];

    const longLanguages = getLongWords(LANGUAGES);
    const longBeatles = getLongWords(BEATLES);

    expect(longLanguages).toBeDefined();
    expect(longLanguages.length).toEqual(expectedLanguagesResult.length);
    expect(longLanguages).toEqual(expectedLanguagesResult);

    expect(longBeatles).toBeDefined();
    expect(longBeatles.length).toEqual(expectedBeatlesResult.length);
    expect(longBeatles).toEqual(expectedBeatlesResult);
  });
});

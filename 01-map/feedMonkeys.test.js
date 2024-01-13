import { feedMonkeys } from "./feedMonkeys.js";

describe("Given feedMonkeys", () => {
  test("When 🍌 is provided as argument. Then expected array should be returned", () => {
    // Arrange
    const fruit = "🍌";
    const expected_result = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    // Act
    const monkey = feedMonkeys(fruit);

    // Assert
    expect(monkey).toBeDefined();
    expect(monkey).toEqual(expected_result);
  });

  test("When 🍎 is provided as argument. Then expected array should be returned", () => {
    // Arrange
    const fruit = "🍎";
    const expected_result = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    // Act
    const monkey = feedMonkeys(fruit);

    // Assert
    expect(monkey).toBeDefined();
    expect(monkey).toEqual(expected_result);
  });
});

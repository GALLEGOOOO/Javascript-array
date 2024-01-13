import capitalizeMates from "./capitalizeMates.js";
describe("Given capitalizeMates", () => {
  test("when an array of strings is given as an argument, then the exected array should be returned ", () => {
    const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const EXPECTED_RESULT = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const matesCapitalLetter = capitalizeMates(MATES);

    expect(matesCapitalLetter).toBeDefined();
    expect(matesCapitalLetter.length).toEqual(4);
    expect(matesCapitalLetter).toEqual(EXPECTED_RESULT);
  });
});

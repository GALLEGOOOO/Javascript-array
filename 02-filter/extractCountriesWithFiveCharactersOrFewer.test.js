import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer.js";

describe("Given extractCountriesWithFiveCharactersOrFewer", () => {
  test("when an array of strings is given as an argument, then the expected array should be returned", () => {
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];
    const EXPECTED_RESULT = ["Italy"];

    const shortCountries = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(shortCountries).toBeDefined();
    expect(shortCountries.length).toEqual(1);
    expect(shortCountries).toEqual(EXPECTED_RESULT);
  });
});

import getTotalVoters from "./getTotalVoters.js";

describe("Given getTotalVoters", () => {
  test("when an array of voters is given as an argument, then the expected total count of voters should be returned", () => {
    const VOTERS = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zack", age: 19, voted: false },
    ];

    const expectedTotalVoters = 7;

    const totalVoters = getTotalVoters(VOTERS);

    expect(totalVoters).toBeDefined();
    expect(totalVoters).toEqual(expectedTotalVoters);
  });
});

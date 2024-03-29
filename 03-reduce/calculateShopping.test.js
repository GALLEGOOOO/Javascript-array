import { calculateShopping } from "./calculateShopping";

describe("Given calculateShopping", () => {
  test("when an array of models is given as an argument, then the expected total cost should be returned", () => {
    const WISHES = [
      { title: "Tesla Model S", price: 90000 },
      { title: "4 carat diamond ring", price: 45000 },
      { title: "Fancy hacky Sack", price: 5 },
      { title: "Gold fidgit spinner", price: 2000 },
      { title: "A second Tesla Model S", price: 90000 },
    ];

    const expectedTotalCost = 227005;

    const totalCost = calculateShopping(WISHES);

    expect(totalCost).toBeDefined();
    expect(totalCost).toEqual(expectedTotalCost);
  });
});

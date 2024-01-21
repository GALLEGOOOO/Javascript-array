/**
 * Given 'CUSTOMERS' array, define function 'customersWhoBelongToMembership' to  return a new array that has filtered out all those who belong to the club.
 *
 * expected: [{ name: 'Foo', member: true },  { name: 'Fizz', member: true },  { name: 'FizzBuzz', member: true }]
 */

const CUSTOMERS = [
  {
    name: "Foo",
    member: true,
  },
  {
    name: "Bar",
    member: false,
  },
  {
    name: "Fizz",
    member: true,
  },
  {
    name: "Buzz",
    member: false,
  },
  {
    name: "FizzBuzz",
    member: true,
  },
];

const customersWhoBelongToMembership = (customers) => {
  const members = customers.filter((customer) => {
    return customer.member === true;
  });

  return members;
};

export default customersWhoBelongToMembership;
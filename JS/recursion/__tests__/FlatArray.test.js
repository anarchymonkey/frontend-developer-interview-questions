import { FlatArray } from "../FlatArray";

// Note : we also have Array.flat() function to check the working of function.
// MDX for .flat - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

const TestArray = [0, [1, 2, 3, [4, [5]]], 6, [7, [8, 9]]];
it("Check Flat Array is correctly working", () => {
  const flatten = FlatArray(TestArray);
  expect(flatten).toEqual(TestArray.flat(Infinity));
});

it("Test the Depth of array", () => {
  let flatten = FlatArray(TestArray, 0);
  expect(flatten).toEqual(TestArray.flat(0));

  flatten = FlatArray(TestArray, 1);
  expect(flatten).toEqual(TestArray.flat(1));

  flatten = FlatArray(TestArray, 2);
  expect(flatten).toEqual(TestArray.flat(2));

  flatten = FlatArray(TestArray, 3);
  expect(flatten).toEqual(TestArray.flat(3));
});

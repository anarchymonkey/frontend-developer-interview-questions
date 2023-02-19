import { flattenArray } from "../FlatArray";

// Note : we also have Array.flat() function to check the working of function.
// MDX for .flat - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

const testArray = [0, [1, 2, 3, [4, [5]]], 6, [7, [8, 9]]];
it("Check Flat Array is correctly working", () => {
  const flatten = flattenArray(testArray);
  expect(flatten).toEqual(testArray.flat(Infinity));
});

it("Test the Depth of array", () => {
  let flatten = flattenArray(testArray, 0);
  expect(flatten).toEqual(testArray.flat(0));

  flatten = flattenArray(testArray, 1);
  expect(flatten).toEqual(testArray.flat(1));

  flatten = flattenArray(testArray, 2);
  expect(flatten).toEqual(testArray.flat(2));

  flatten = flattenArray(testArray, 3);
  expect(flatten).toEqual(testArray.flat(3));
});

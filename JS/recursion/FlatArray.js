/* 
    Flat Array using Recursion

    Ex - Full Flat
    Input: [0,[1,2,3,[4,5]],6,[7,[8,9]]]
    OutPut: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

*/

export const flattenArray = (inputArr, depth = Infinity, currentDepth = 0) => {
  let flattened = [];
  const globalDepth = depth;
  for (let i = 0; i < inputArr.length; i++) {
    const element = inputArr.at(i);
    if (Array.isArray(element) && element.length > 0) {
      if (globalDepth === currentDepth) {
        flattened.push(element);
      } else {
        const flatten = flattenArray(element, globalDepth, currentDepth + 1);
        flattened = flattened.concat(flatten);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

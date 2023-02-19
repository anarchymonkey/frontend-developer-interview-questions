/* 
    Flat Array using Recursion

    Ex - Full Flat
    Input: [0,[1,2,3,[4,5]],6,[7,[8,9]]]
    OutPut: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

*/

export const FlatArray = (InputArr, Depth = Infinity, CurrentDepth = 0) => {
  let flattened = [];
  const GlobalDepth = Depth;
  for (let i = 0; i < InputArr.length; i++) {
    const element = InputArr[i];
    if (Array.isArray(element) && element.length > 0) {
      if (GlobalDepth === CurrentDepth) {
        flattened.push(element);
      } else {
        const Flatten = FlatArray(element, GlobalDepth, CurrentDepth + 1);
        flattened = flattened.concat(Flatten);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

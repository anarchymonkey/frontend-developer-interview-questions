/* 
    Flat Array using Recursion

    Ex - Full Flat
    Input: [0,[1,2,3,[4,5]],6,[7,[8,9]]]
    OutPut: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

*/

export const FlatArray = (InputArr, Depth = Infinity) => {
  let flattened = [];

  for (let i = 0; i < InputArr.length; i++) {
    const element = InputArr[i];
    if (Array.isArray(element) && element.length > 0) {
      let CurrentDepth = 0;
      if (Depth <= CurrentDepth) {
        console.log(element);
        flattened.push(element);
      } else {
        const Flatten = FlatArray(element);
        CurrentDepth += 1;
        flattened = flattened.concat(Flatten);
        //   flattened.push(...Flatten); we can use spread operator as well.
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

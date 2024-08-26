type TransformationRules<T> = {
  [Property in keyof T]?: (value: T[Property]) => any;
};

function transformData<T>(items: T[], rules: TransformationRules<T>): T[] {
  // TODO: Implement the transformData function
  return items.map(item => {
    const transformedItem = { ...item }; // Create a copy to avoid mutating original items
    for (const property in rules) {
      if (Object.prototype.hasOwnProperty.call(rules, property)) {
        const transformationFunction = rules[property];
        if (typeof transformationFunction === 'function') {
          transformedItem[property] = transformationFunction(item[property]);
        } else {
          console.warn(`Invalid transformation rule for property "${property}": expected a function but got ${typeof transformationFunction}`);
        }
      }
    }
    return transformedItem;
  });
}


//Test case #1
console.log("Test case #1: Modify only one property ");
const items1 = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
console.log("Pre-transformation: ", items1);
const rules1: TransformationRules<typeof items1[0]> = {
a: (value) => value * 2,
};
const transformedItems1 = transformData(items1, rules1);
console.log("Post transformation: ", transformedItems1);

//Test case #2
console.log("Test case #2: Modify both properties");
const items2 = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
console.log("Pre-transformation: ", items2);
const rules2: TransformationRules<typeof items2[0]> = {
a: (value) => value + 1,
b: (value) => value * 3,
};
const transformedItems2 = transformData(items2, rules2);
console.log("Post transformation: ", transformedItems2);

//Test case #3
console.log("Test case #3: Modify non-existent property");
const items3 = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
console.log("Pre-transformation: ", items3);
const rules3: TransformationRules<typeof items3[0]> = {
c: (value) => value + 1,
};
const transformedItems3 = transformData(items3, rules3);
console.log("Post transformation: ", transformedItems3);
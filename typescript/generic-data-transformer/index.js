var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function transformData(items, rules) {
    // TODO: Implement the transformData function
    return items.map(function (item) {
        var transformedItem = __assign({}, item); // Create a copy to avoid mutating original items
        for (var property in rules) {
            if (Object.prototype.hasOwnProperty.call(rules, property)) {
                var transformationFunction = rules[property];
                if (typeof transformationFunction === 'function') {
                    transformedItem[property] = transformationFunction(item[property]);
                }
                else {
                    console.warn("Invalid transformation rule for property \"".concat(property, "\": expected a function but got ").concat(typeof transformationFunction));
                }
            }
        }
        return transformedItem;
    });
}
//Test case #1
console.log("Test case #1: Modify only one property ");
var items1 = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
console.log("Pre-transformation: ", items1);
var rules1 = {
    a: function (value) { return value * 2; },
};
var transformedItems1 = transformData(items1, rules1);
console.log("Post transformation: ", transformedItems1);
//Test case #2
console.log("Test case #2: Modify both properties");
var items2 = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
console.log("Pre-transformation: ", items2);
var rules2 = {
    a: function (value) { return value + 1; },
    b: function (value) { return value * 3; },
};
var transformedItems2 = transformData(items2, rules2);
console.log("Post transformation: ", transformedItems2);
//Test case #3
console.log("Test case #3: Modify non-existent property");
var items3 = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
console.log("Pre-transformation: ", items3);
var rules3 = {
    c: function (value) { return value + 1; },
};
var transformedItems3 = transformData(items3, rules3);
console.log("Post transformation: ", transformedItems3);

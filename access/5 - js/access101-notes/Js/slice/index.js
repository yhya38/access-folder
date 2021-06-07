// The slice() method returns the selected elements in an array, as a new array object.
// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// The original array will not be changed.

// Syntax

array.slice(start, end);

// Examples

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let res = fruits.slice(1, 3);
console.log(res) //Prints: ["Orange", "Lemon"]

console.log(fruits.slice(0,4)) //Prints: ["Banana", "Orange", "Lemon", "Apple"]

// -1 returns the last element
console.log(fruits.slice(-1)) //Prints: ["Mango"]


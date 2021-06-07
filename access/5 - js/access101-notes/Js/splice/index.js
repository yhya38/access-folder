// The splice() method adds/removes items to/from an array, and returns the removed item(s).
//  This method changes the original array.

// Syntax

// array.splice(index, howmany, item1,..., itemX)

// index - 	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array

// howmany - Optional. The number of items to be removed. If set to 0, no items will be removed

// item1, ..., itemX - Optional. The new item(s) to be added to the array


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0, "Lemon", "Kiwi");
console.log(fruits) //Prints: ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

//At position 2, add the new items, and remove 1 item:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits) //Prints: ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]

//At position 2, remove 2 items:
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);
console.log(fruits) //Prints: ["Banana", "Orange", "Kiwi"]
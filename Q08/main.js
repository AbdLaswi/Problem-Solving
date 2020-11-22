console.log("Problem Solving Q: 8");

/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

function uniqueItems(arr) {
  // YOUR CODE HERE
  arr.sort();
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  return arr.length;
}

// Examples:
// uniqueItems([5, 77, 1, 3]); // => 4
// uniqueItems([1, 6, 7]); // => 3
// uniqueItems([1, 2, 3, 1, 2, 3]); // => 3
// uniqueItems([5, 1, 2, 2, 1, 5]); // => 3
// uniqueItems([3, 3, 5, 3]); // => 2
// uniqueItems([5, 1, 1, 5, 1]); // => 2
// uniqueItems([1, 1, 1, 1, 1]); // => 1

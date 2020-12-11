console.log("Problem Solving Q: 20");

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(arr) {
  // YOUR CODE HERE
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    num = num * arr[i];
  }
  return num;
}

/* 
Examples:
largestProductOfThree([2, 1, 3, 7]) // => 42
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/

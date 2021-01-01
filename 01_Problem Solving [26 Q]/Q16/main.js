console.log("Problem Solving Q:16 ");

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(arr) {
  // YOUR CODE HERE
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === 0 && arr[i] === arr[i + 1]) return arr[i];
  }
}

/* 
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8 
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/

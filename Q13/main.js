console.log("Problem Solving Q: 13");

/* Largest Possible Sum */

/*  
Write a function that calculates the largest possible sum of any n
consecutive numbers in an array arr of integers (where n ≥ 1).
*/

function largestPossibleSum(array, n) {
  // YOUR CODE HERE
  let location = 0;
  let Arr = [];
  for (let j = 0; j < n; j++) {
    let number = 0;
    for (let i = 0; i < array.length; i++) {
      if (number < array[i]) {
        number = array[i];
        location = i;
      }
    }
    array.splice(location, 1);
    Arr.push(number);
    console.log(array, Arr);
  }
  let largestSum = Arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(largestSum);
  return largestSum;
}
/* 
Examples:
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1); // => 10
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2); // => 14
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3); // => 16
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4) // => 20 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5) // => 23 

largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 14 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 26 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 29 


largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10 
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 19 
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22 
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 32 
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 36 
*/

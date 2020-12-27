console.log("Problem Solving Q: 13");

/* Largest Possible Sum */

/*  
Write a function that calculates the largest possible sum of any n
consecutive numbers in an array arr of integers (where n ≥ 1).
*/
function largestPossibleSum(array, n) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i <= array.length - n; i++) {
    sum1 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += array[i + j];
    }
    if (sum1 > sum2) {
      sum2 = sum1;
    }
  }
  return sum2;
}
/*
Examples: 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2); // => 14
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1); // => 10
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3); // => 16
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4); // => 20
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5); // => 23

largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1); // => 10
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2); // => 14
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3); // => 22
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4); // => 26
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5); // => 29

largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1); // => 10
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2); // => 19
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3); // => 22
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4); // => 32
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5); // => 36
*/

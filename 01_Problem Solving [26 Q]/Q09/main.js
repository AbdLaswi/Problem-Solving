console.log("Problem Solving Q: 9");

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence(arr) {
  // YOUR CODE HERE
  let seq = 0;
  let seq1 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      seq += arr[i];
    } else {
      if (seq1 <= seq) {
        seq1 = seq;
        seq = 0;
      } else {
        seq = 0;
      }
    }
  }
  if (seq1 === 0) {
    return "There is no one sequenced";
  } else if (seq1 < seq) {
    return seq;
  } else {
    return seq1;
  }
}
// Examples:
//  longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]); // => 4
// longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]); // => 5
// longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]); // => 2
// longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]); // => 3
// longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]); // => 4
// longestSequence([1, 0, 0, 1]); // => 1
// longestSequence([0, 0, 0, 0]); // => 'There is no one sequenced'

console.log("Problem Solving Q: 10");

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(arr) {
  // YOUR CODE HERE
  let count = 1;
  let count1 = 1;
  // My code is determine how many times the first letter equals the next letter,
  // so if it was [l , l] it added 1 value not two for this why I put "count =1"
  arr = arr.split("");
  arr.sort();
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      if (count >= count1) {
        count1 = count;
        count = 1;
      } else {
        count = 1;
      }
    }
  return count1;
}
/* 
Examples:
timesOfMostFreqChar("hello world"); // => 3
timesOfMostFreqChar("hello world lol"); // => 5
timesOfMostFreqChar('hello world lol woooow') // => 7
timesOfMostFreqChar('hello world lol wow www.com') // => 6
*/

console.log("Problem Solving Q:15 ");

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(firstStr, secStr) {
  // YOUR CODE HERE
  let arr = [];
  let first = firstStr.split(" ").join("").split("");
  let sec = secStr.split(" ").join("").split("");
  for (let i = 0; i < first.length; i++) {
    if (sec.includes(first[i])) {
      if (!arr.includes(first[i])) arr.push(first[i]);
    }
  }
  console.log(arr.join(""));
  return arr.join("");
}
/*
Examples: 
commonCharacters("abc", "abc"); // => 'abc'
commonCharacters("What is love?", "Baby don't hurt me"); // => 'hatoe'
commonCharacters("Riding on a buffalo makes me more approachable", "so what"); // => 'oash'
*/

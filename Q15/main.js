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
  firstStr = firstStr.split(" ").join("").split("");
  secStr = secStr.split(" ").join("").split("");
  for (let i = 0; i < firstStr.length; i++) {
    if (secStr.includes(firstStr[i])) {
      if (!arr.includes(firstStr[i])) arr.push(firstStr[i]);
    }
  }
  return arr.join("");
}
/*
Examples: 
commonCharacters("abc", "abc"); // => 'abc'
commonCharacters("What is love?", "Baby don't hurt me"); // => 'hatoe'
*/

commonCharacters("Riding on a buffalo makes me more approachable", "so what"); // => 'oash'

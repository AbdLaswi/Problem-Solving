console.log("Problem Solving Q: 12");

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. 
Input sentences contain only English letter and space characters.
*/

function reverseEachWord(str) {
  // YOUR CODE HERE
  let Arr = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    let STR = str[i].split("").reverse();
    Arr.push(STR.join(""));
  }
  Arr.join(" ");
  return Arr;
}
/* 
Examples:
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("This is a test"); // => "sihT si a tset"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/

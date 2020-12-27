console.log("Problem Solving Q: 21");

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
  // YOUR CODE HERE
  str = str.split("");
  let unique = "";
  let char = str[0];
  for (let i = 0; i < str.length; i) {
    str.shift();
    console.log(str);
    if (!str.includes(char)) {
      unique += char;
    } else {
      char = str[i];
    }
  }
  console.log(unique);
  return unique;
}

onlyUnique("hello there"); // => 'o tr'

/* 
Examples:
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/

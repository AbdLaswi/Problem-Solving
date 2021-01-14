console.log("Problem Solving Q: 21");

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
  str = str.split("");
  const [unique, obj] = [[], {}];
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = 1 + (obj[str[i]] || 0);
  }
  const charEntries = Object.entries(obj);
  for (let i = 0; i < charEntries.length; i++) {
    if (charEntries[i][1] === 1) unique.push(charEntries[i][0]);
  }
  return unique.join("");
}

onlyUnique("hello there"); // => 'o tr'

/* 
Examples:
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/

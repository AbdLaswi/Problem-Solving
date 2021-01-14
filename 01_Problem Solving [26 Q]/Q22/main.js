console.log("Problem Solving Q: 22");

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = 1 + (obj[str[i]] || 0);
  }
  const frequency = Object.entries(obj);
  frequency.sort(([a, b], [c, d]) => d - b);
  return frequency;
}

/* 
Examples:
characterFrequency("mississippi"); // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/

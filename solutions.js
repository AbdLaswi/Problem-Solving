/* Q1: Longest Word */
function LongestWord(sen) {
  // check if sen is empty string
  if (sen.length === 0) {
    // return 'there are 0 words'
    return 'there are 0 words';
  }

  // the initial value for the output
  let output = ''; // 'lol'

  // Process
  // convert the sen (string) to an array (have each word alone)
  const words = sen.split(' '); // ["lol", 'a', "time"]
  // iterate over the array (words)
  for (let index = 0; index < words.length; index++) {
    // check if the element (the current word) the longest word till now or not
    if (words[index].length > output.length) {
      // make the output (longest world) equal current world
      output = words[index];
    }
  }
  // return the longest word
  return output;
}

/* Q2: Longest Word_2 */

/* Q3: First Reverse */

/* Q4: Username Validation */

/* Q5: Find Intersection */
/* Q6: Even or Not */
/* Q7: Sum Array Odd */
/* Q8: Unique Item */
/* Q9: Longest Sequence */
/* Q10: Times Of Most Freq Char */
/* Q11: Is Power Of Two */
/* Q12: Reverse Each Word */
/* Q13: Largest Possible Sum */

/* Q14:  */
/* Q15:  */
/* Q16:  */
/* Q17:  */
/* Q18:  */
/* Q19:  */
/* Q20:  */
/* Q21:  */
/* Q22:  */
/* Q23:  */
/* Q24:  */
/* Q25:  */
/* Q26:  */
/* Q27:  */
/* Q28:  */
/* Q29:  */
/* Q30:  */
/* Q31:  */
/* Q32:  */
/* Q33:  */
/* Q34:  */


function Arras(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i]%2=== 0 && arr[i]===arr[i+1] ) return arr[i]
  }
}

uniqueItems2([1, 1, 1, 1, 1]);


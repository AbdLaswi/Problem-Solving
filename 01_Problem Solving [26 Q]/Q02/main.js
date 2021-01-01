console.log("Problem Solving Q: 2 ");
/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter
being passed and return the largest word in the string.
If there are two or more words that are the same length,
return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.
*/
const removeSymbol = (sen) => {
  const symbol = /[.,!,@,#,$,%,^,&,*,?,_,~,-,(,)-]/g;
  symbolArr = sen.match(symbol);
  sen = sen.split("");
  for (j = 0; j < symbolArr.length; j++) {
    for (let i = 0; i < sen.length; i++) {
      if (sen[i] === symbolArr[j]) {
        sen.splice(i, 1);
        i--;
      }
    }
  }
  return sen;
};
function longestWord_2(sen) {
  // YOUR CODE HERE	  // YOUR CODE HERE
  str = "";
  sen = removeSymbol(sen);
  sen = sen.join("").split(" ");
  for (let i = 0; i < sen.length; i++) {
    if (sen[i].length > str.length) {
      str = sen[i];
    }
  }
  return str;
}

/* 
Examples:
longestWord_2("lol!- time."); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'
*/

// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
const removeSymbol = (str) => {
  const symbol = /[.,!,@,#,$,%,^,&,*,?,_,~,-,(,)-, ]/g;
  symbolArr = str.match(symbol);
  str = str.split("").sort();
  if (symbolArr !== null) {
    for (j = 0; j < symbolArr.length; j++) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] === symbolArr[j]) {
          str.splice(i, 1);
          i--;
        }
      }
    }
  }
  return str;
};
function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }
  stringA = removeSymbol(stringA.toLowerCase());
  stringB = removeSymbol(stringB.toLowerCase());
  return stringB.join("") === stringA.join("");
}

module.exports = anagrams;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  str = str.split("");
  let [freq, count, char] = [0, 0, null];
  if (str.length === 1) {
    char = str[0];
  }
  for (let i = 0; i < str.length; i++) {
    if (count > freq) {
      freq = count;
      char = str[i - 1];
    }
    count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count += 1;
      }
    }
  }
  return char;
}

module.exports = maxChar;

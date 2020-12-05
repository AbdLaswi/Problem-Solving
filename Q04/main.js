console.log("Problem Solving Q: 4 ");

/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter
being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function usernameValidation(str) {
  // YOUR CODE HERE
  let len = str.length - 1;
  const [upperLetter, lowerLetter, symbol] = [
    /[A-Z]/g,
    /[a-z]/g,
    /[.,!,@,#,$,%,^,&,*,?,~,-,(,), ]/g,
  ];

  if (str.length < 4 || str.length > 25) {
    return false;
  }
  if (
    (str[0].match(lowerLetter) || str[0].match(upperLetter)) &&
    str[len] !== "_" &&
    str.match(symbol) === null
  ) {
    return true;
  }
}
/* 
Examples:
usernameValidation("u__hello_world123"); // => true
usernameValidation("aa_"); // => false

*/
function usernameValidation(str) {
  const reg1 = /^[a-zA-Z]([a-zA-Z0-9_]){3,18}[a-zA-Z0-9]$/;
  return reg1.test(str);
}

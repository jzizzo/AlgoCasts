// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // // find midpoint
  // const mid = str.length/2;
  // // iterate through string with val for start and end
  // for (let start = 0, end = str.length - 1; start <= mid, end >= mid; start++, end--) {
  //   // if not same, return false
  //   if (str[start] !== str[end]) {
  //     return false;
  //   }
  // }
  // // return true
  // return true;

  // Second solution:
  // const reversed = str.split('').reverse().join('');
  // return reversed === str;

  // Third Solution:
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

module.exports = palindrome;

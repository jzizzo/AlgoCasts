// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}


// // quick, first solution:
// function vowels(str) {
//   // set count
//   let count = 0;
//   const vowelCheck = ['a', 'e', 'i', 'o', 'u'];

//   // iterate through vowels
//   // edge case: casing
//   for (let letter of str.toLowerCase()) {
//     // is current letter a vowel?
//     if (vowelCheck.includes(letter)) {
//       // yes, inc count
//       count++;
//     }
//   }
//   // return count
//   return count;
// }

module.exports = vowels;

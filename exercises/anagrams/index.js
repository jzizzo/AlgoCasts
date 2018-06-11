// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   // regex and lowercase stringA
//   const strA = stringA.replace(/[^\w]/g).toLowerCase();
//   // regex and lowercase stringB
//   const strB = stringB.replace(/[^\w]/g).toLowerCase();
//   // create map for A
//   const mapA = {};
//   // create map for B
//   const mapB = {};

//   // iterate through A
//   for (let val of strA) {
//     // if curr val doesn't exist, create it, otherwise increment it
//     mapA[val] = ++mapA[val] || 1;
//   }
//   // iterate through B
//   for (let val of strB) {
//     // if curr val doesn't exist, create it, otherwise increment it
//     mapB[val] = ++mapB[val] || 1;
//   }

//   // do keys match for mapA to mapB? no:
//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     // return false
//     return false;
//   }
//   // iterate through mapA
//   for (let val in mapA) {
//     // is the value at mapA of i NOT the same as the value of mapB of i? No:
//     if (mapA[val] !== mapB[val])
//       // return false
//       return false;
//   }
//   // return true
//   return true;
// }

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);

  function cleanStr(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join('');
  }
}

module.exports = anagrams;

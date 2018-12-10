// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // create result
  let reversedStr = '';
  // iterate through string starting at end towards start
  for (let i = str.length - 1; i >= 0 ; i--) {
      // add our current letter to the result
      reversedStr += str[i];
    }
    // return result
    return reversedStr;

    // return str.split('').reverse().join('');

    // return str.split('').reduce((rev, char) => char + rev, '');
}

// You have to invoke the funciton in order to use node inspect index.js and then repl
// reverse('asdf');

module.exports = reverse;

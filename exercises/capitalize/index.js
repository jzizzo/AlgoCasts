// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // split the string into array by space
  const words = str.split(' ')
  // captilize array item at zero index
  const capWords = words.map((word) => word[0].toUpperCase() + word.slice(1));
  // join and return
  return capWords.join(' ');
}

module.exports = capitalize;

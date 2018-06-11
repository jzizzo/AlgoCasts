// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // create dictionary
  let dict = {};
  // set current record obj (char: occurance)
  let record = {};
  record[str[0]] = 0;

  // iterate through str
  for (let char of str) {
    // does entry exist? no:
    if (!dict[char]) {
      // create entry
      dict[char] = 1;
    // yes is exists
    } else {
      // increment by 1
      dict[char]++;
    }
    // is current new record? Yes:
    if (dict[char] > record[Object.keys(record)]) {
      // reset record
      record = {};
      record[char] = dict[char];
    }
  }
  return Object.keys(record)[0];
}

module.exports = maxChar;

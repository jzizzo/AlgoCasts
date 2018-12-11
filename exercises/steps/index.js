// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// First solution:
// function steps(n) {
//   // store a string with current step breadth
//   let row = '';
//   // set an index to 1
//   let index = 1;

//   // while index is less than or equal to n
//   while (index <= n) {
//     // add # to row
//     // console log row
//     // increment index
//     row += '#';
//     // set row with spacing str
//     completeRow = row;
//     // add spacing
//       for (let i = 0; i < n - index; i++) {
//         completeRow += ' ';
//       }
//     console.log(completeRow);
//     index++;
//   }
// }

// Recursive solution:
function steps(n, size = n) {
  // n equals 0 return out (base case)
  if (n === 0) return;
  // set row to empty string
  let row = '';
  // set steps to add to size - n + 1
  let blocksToAdd = size - n + 1;

  // iterate through size
  for (let i = 0; i < size; i++) {
    // if row to add > 0
    // add # to row
    // else
    // ad space to row
    // row to add --
    if (blocksToAdd > 0) {
      row += '#';
    } else {
      row += ' ';
    }
    blocksToAdd--;
  }
    
  // console log row
  console.log(row);
  // call steps with n - 1 and size
  steps(n - 1, size);
}

module.exports = steps;

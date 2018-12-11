// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// First solution:
// function pyramid(n) {
//   // iterate through rows 0 through n
//   for (let row = 0; row < n; row++) {
//     // create new str that will hold blocks
//     let str = '';
//     // calculate spaces on each side by subtracting 1 and row from n
//     const padding = n - (row + 1);
//     // calculate size by adding padding + padding + 1
//     const size = (2 * padding) + 1;
//     // calculate blocks by adding row index + row index + 1
//     const blocks = (2 * row) + 1;

//     // add spaces on left
//     for (let i = 0; i < padding; i++) {
//       str += ' ';
//     }
//     // add blocks in middle
//     for (let i = 0; i < blocks; i++) {
//       str += '#';
//     }
//     // add spaces on right
//     for (let i = 0; i < padding; i++) {
//       str += ' ';
//     }
//     // console log
//     console.log(str);
//   }
// }

function pyramid(n, row = 0, level = '') {
  if (row === n) return;

  if (level.length == (2 * n) - 1){
    console.log(level);
    return pyramid(n, row + 1);
  }

  const mid = Math.floor(((2 * n )- 1) / 2);
  let add;
  if (mid - row <= level.length && mid + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}


module.exports = pyramid;

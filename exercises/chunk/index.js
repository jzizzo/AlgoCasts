// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   // set resultArr
//   const resultArr = [];
//   // set subArr
//   let subArr = [];
//   // set count
//   let count = 0;

//   // iterate through array with while
//   for (let i = 0; i < array.length; i++) {
//     const val = array[i];

//     // while count is less than size
//     if (count < size) {
//       // push val into subArr
//       subArr.push(val);
//       // count++
//       count++;
//     // is count === size? yes:
//     }
//     if (count === size || i === array.length - 1) {
//       // reset count
//       count = 0;
//       // push subArr into resultArr
//       resultArr.push(subArr);
//       // reset subArr
//       subArr = [];
//     }
//   }
//   // return resultArr
//   return resultArr;
// }

function chunk(array, size) {
  // set chunked
  const chunked = [];
  // set index
  let index = 0;

  // while index is greater than array.length:
  while (index < array.length) {
    // push slice of index - size into chunked array
    chunked.push(array.slice(index, index + size));
    // advance index
    index += size;
  }
  // return chunked
  return chunked;
}

module.exports = chunk;

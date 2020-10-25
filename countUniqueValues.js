// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//INPUTS: sorted array (array)
//OUTPUT: counted unique values (number)

// Examples:
// // [1,1,1,1,1,2] => 2
// // [1,2,3,4,4,4,7,7,12,12,13] => 7
// // [-3,-2,-2,1,3] => 4
// // [] => 0

// create a function called countUniqueValues, params of a sorted array(array)
// move all unique values to the front
// return number of unique values where first index i ends
// create two pointers (let i=0; j=1)

const countUniqueValues = (arr) => {
  let i = 0;
  let j = 1;

  if (arr.length === 0) {
    return 0;
  }

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

let arr = [];

// arr = [1, 1, 1, 1, 1, 2]; //=> 2
// arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; //=> 7
// arr = [-3, -2, -2, 1, 3]; //=> 4
arr = []; //=> 0

console.log(countUniqueValues(arr));

/*
  BUBBLE SORT is a sorting algorithm where the largest values bubble up to the top
  Time complexity:
  - worst case: O(n^2), generally
  - best case: O(n), with noSwap optimization

  BUBBLE SORT optimized version Pseudocode:
    - Start looping from the end of the array twoards the beginning, with a variable called i
    - Start an inner loop with a variable called j from the beginning until i-1
    - If arr[j] is greater than arr[j+1], swap those two values
    - return the sorted array
*/

// BUBBLE SORT less optimized version
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Optimzed with ES5
function bubbleSortOpt1(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Optimzed with ES6
const bubbleSortOpt2 = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// Optimized with noSwaps, "short circuits" and "shrinks" the size of the array
const bubbleSortOpt3 = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

// console.log(bubbleSort([37, 45, 29, 8]));
// console.log("")
// console.log(bubbleSortOpt1([37, 45, 29, 8]));
// console.log("");
// console.log(bubbleSortOpt2([37, 45, 29, 8]));
// console.log("");
// console.log(bubbleSortOpt3([4, 1, 2, 3]));
// console.log("");

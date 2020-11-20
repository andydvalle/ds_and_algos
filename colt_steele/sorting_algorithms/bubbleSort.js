// Bubble sort is a sorting algorithm where the largest values bubble up to the top

// Bubble sort less optimized version
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

// bubbleSort([37, 45, 29, 8]);
// console.log("")

// Optimized Bubble Sort Pseudocode:
// Start looping from the end of the array twoards the beginning, with a variable called i
// Start an inner loop with a variable called j from the beginning until i-1
// if arr[j] is greater than arr[j+1], swap those two values
// return the sorted array

// optimzed bubbleSort with ES5
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

console.log(bubbleSortOpt1([37, 45, 29, 8]));
console.log("");

// optimzed bubble sort with ES6
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

console.log(bubbleSortOpt2([37, 45, 29, 8]));

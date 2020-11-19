// // my solution
// function binarySearch(arr, val) {
//   // add whatever parameters you deem necessary - good luck!
//   let left = 0;
//   let right = arr.length;

//   while (left < right) {
//     let middle = left + Math.floor((right - left) / 2);
//     if (val === arr[middle]) {
//       return middle;
//     } else if (val > arr[middle]) {
//       left = middle;
//     } else {
//       right = middle;
//     }
//   }
//   return -1;
// }

// Colt's solution
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] == elem) {
    return middle;
  }
  return -1;
}

// Colt's solution, removed white space
function binarySearchCleaned(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50));

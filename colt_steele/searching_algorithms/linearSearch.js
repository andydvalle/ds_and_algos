// my solution, O(n) solution
function linearSearch1(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// colt's solution, O(n) solution
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
}

// test
console.log(linearSearch1([34, 56, 1, 2], 1));
console.log(linearSearch([34, 56, 1, 2], 1));

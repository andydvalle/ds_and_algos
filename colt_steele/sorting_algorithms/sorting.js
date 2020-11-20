// Before we sort, we must swap!
// Many sorting alrogithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

//ES5 swapping version
function swap1(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//ES2015, ES6 swapping version
const swap2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

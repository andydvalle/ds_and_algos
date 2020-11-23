/*
    SELECTION SORT: similar to Bubble Sort but instead of first placing large values into sorted position ,it places small values into sorted position

    Selection sort pseudocode:
    - Store the first element as the smallest value you've seen so far. 
    - compare this item to the next item in the array until you find a smaller number.
    - If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    - If the "minimum" is not the value(index) you initially began with, swap the two values.
    - Repeat this with the next element until the array is sorted.

    Big O complexity:
    - worst case O(n^2)
    - where it is potentially better is in one scenario:
        - where you want to minimize the number of swaps
        - in bubble sort, you swap over and over until it goes to the end; but in selection sort you're only making one sort per loop
    - not good sorting, but easy to understand
*/

// ES5 syntax
function selectionSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) {
      //SWAP!!
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES6 syntax
function selectionSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      // finds the lowest value in the array and sets it to 'lowest' variable
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}

console.log(selectionSort1([34, 22, 10, 19, 17]));
console.log(selectionSort2([34, 22, 10, 19, 17]));
/*
i, j, lowest
0, 1, 1
0, 2, 2
0, 3, 2
0, 4, 2
*/

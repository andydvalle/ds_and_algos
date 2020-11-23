/*
    INSERTION SORT: builds up the sort by gradually creating a larger half which is always sorted

    Insertion Sort Pseudocode:
    - Start by picking the second element in the array
    - Now compare the second element with the one before it and swap if necessary.
    - Continue to the next element and if it is in the incorrect order, iteratre through the sorted portion( i.e. the left side) to place the element in the correct place.
    - Repeat until the array is sorted

    Big- O complexity:
    - Worst case O(n^2) i.e. [4,3,2,1]
    - Best Case, if our data is almost sorted i.e. [1,2,3,0]
 */

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
/*
 [1,2,9,76,4]
           -
 [1,2,9,4,76]
        -
 [1,2,4,9,76]
      -
 */

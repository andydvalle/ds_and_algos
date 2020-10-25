// write a function called minSubArrayLen which accepts two paramenters - an array of positive integers and a positive integer.

// this function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// INPUTS: array of positive numbers(array), a positive number (number)
// OUTPUT: the length of smallest subarray greater than equal to num (number)

// Examples
// // minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// // minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// // minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// // minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
// // minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0

// create a function called minSubArrayLen that takes in two params (nums, sum)
// create variables:
// // total = 0; (check >= num)
// // minLen = 0;
// // start = 0;
// // end = 0;

const minSubArrayLen = (nums, sum) => {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    //if the total doesn't equal to sum then move window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum, we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reached the end
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

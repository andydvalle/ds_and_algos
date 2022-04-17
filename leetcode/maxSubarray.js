/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/

var maxSubArray = function (nums) {
  // let the largestSum start at 0 index;
  // largestSum will be the tracker of largest sum in a contiguous array
  // loop through array to add up every num
  // keep replacing largestSum if there is a larger sum;
  // if ever the sum becomes negative; reset current sum back to zero
  // return the largestSum

  let largestSum = nums[0];
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
    if (temp < 0) {
      temp = 0;
    }
    largestSum = Math.max(largestSum, temp);
  }

  return largestSum;
};

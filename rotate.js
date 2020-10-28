/*
    Given an array, rotate the array to the right by k steps, where k is non-negative.

   Follow up:
    - Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
    - Could you do it in-place with O(1) extra space? 

    EXAMPLE
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]

    */

//my solution 1
var rotate = function (nums, k) {
  for (let i = nums.length - 1; i >= nums.length - k; i--) {
    let popped = nums.pop();
    nums.unshift(popped);
  }
};

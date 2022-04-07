// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//inputs
// arr nums of integers
// int target
//outputs
// arr with two integers i.e. [x,y]
//create a var pointer, starting at i 0
//loop through array checking if pointer + next === target
// if not then replace pointer; base = nums[i+1]
// if yes then return the indices of pointer and next: [i,j]

// examples nums = [3,2,1,4]; target = 6;

// BRUTE FORCE
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]

// REFACTOR

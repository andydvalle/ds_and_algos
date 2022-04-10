var containsDuplicate = function (nums) {
  // check if there is a number that appears 2 or more times and return true
  // if every number is different then return false
  // create a frequncy counter object: key is a number in the array and the value is the amount of times it appears in the array
  // values would always be greater than one
  // check the values
  // if there is a value that is greater than one, return true
  // if all values are equal to one, return false

  let frequencyCounter = {}; // key = number; value = frequency

  // construct the freqeuencyCounter obj
  for (val of nums) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }

  // loop through obj to find any key with value greater than one
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true;
  }

  // return false if above loop does not return true
  return false;
};

console.log(containsDuplicate([1, 1, 2, 3])); // true
console.log(containsDuplicate([1, 4, 2, 3])); // false
console.log(containsDuplicate([1, 4, 2, 1])); // true

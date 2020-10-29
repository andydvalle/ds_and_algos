var containsDuplicate = function (nums) {
  let counter = {};

  nums.map((num) => {
    counter[num] = (counter[num] || 0) + 1;
  });

  for (let key in counter) {
    if (counter[key] > 1) {
      return true;
    }
  }
  return false;
};

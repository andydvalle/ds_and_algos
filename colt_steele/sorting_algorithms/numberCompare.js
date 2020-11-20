// arranges from smalles to largest, if returns a negative number
function numberCompare1(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare); // [4, 6, 10, 15]

// arranges from largest to smallest,
function numberCompare2(num1, num2) {
  return num2 - num1;
}

[6, 4, 15, 10].sort(numberCompare); // [15, 10, 6, 4]

// arranges strings from smallest to largest
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
// ["Colt", "Steele", "Algorithms", "Data Structures"]

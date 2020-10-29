// frequency counter pattern

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as 'cinema', formed from 'iceman'.

// INPUTS: str1 (string), str2(string)
// OUTPUT: boolean

// EXAMPLES
// // anagram('rat', 'tar') // true
// // // {r:1, a:1, t:1} ; {t:1, a:1, r:1}

// // anagram('noon', 'none') // false
// // anagram('noone', 'none') // false
// // // {n:2, o:2, e:1} ; {n:2, o:1, e:1}

// write a function called anagram that takes in two params (str, str2)
// construct objects of each string, where keys are each letter (char) of str and values is the frequency
// compare the two objects if matching key/values, return true
// // do both objects have the same keys?
// // do those keys have the same number?

const anagram = (a, b) => {
  const str1 = a.toLowerCase();
  const str2 = b.toLowerCase();

  console.log(str1, str2);

  const obj1 = {};
  const obj2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(anagram("Art", "rat"));

// # region 4 -- Jan 8 2026

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let s of strs) {
    const key = s.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
};

// # endregion

// # region 3 -- May 21 2025
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/* Time Complexity: O(n * m) where n is the number of strings 
in the input array s. and m is the average length of a string in strs.

Space Complexity: O(n * m) The hash map will store n keys of length m.
*/
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let s of strs) {
    const key = s.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
};

// #endregion

// #region 2 -- May 15 2025
/* Hash Map

Time Complexity: O(n * m * log(m)) (Analyze Complexity Confirmed)
n is number of strings in the input array strs
m is the average length of a string in strs
string.split('').sort().join('') takes O(m * log(m)) and then you have to do it 
for every element in the strs array.

Space Complexity: O (n * m) (Analyze Complexity Confirmed)
The hash map will store n keys of length m

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let s of strs) {
    const key = s.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
};

// #endregion

// #region 1 -- May 10 2025

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/* Time Complexity: O(n * m * log(m)) 
 where n is the number of strings in the input array strs. 
 m is the average length of a string in strs.
 string.split('').sort().join('') takes O(m * log(m)) and then you have to do it 
 for every element in the strs array.

 Space Complexity: O(n * m) 
 The hash map will store n keys of length m. 
 */
var groupAnagrams = function (strs) {
  let hashMap = new Map();

  for (let s of strs) {
    const key = s.split("").sort().join("");
    if (!hashMap[key]) hashMap[key] = [];
    hashMap[key].push(s);
  }
  return Object.values(hashMap);
};

// #endregion

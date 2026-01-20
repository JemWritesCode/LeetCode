/**
 * @param {string[]} strs
 * @return {string}
 */
// Time Complexity: O(n * m) - Where n is the length of the shortest string and m is the number of strings
// Space Complexity: O(1) - we just iterate over the strings in place.
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (i === s.length || s[i] !== strs[0][i]) {
        return s.slice(0, i);
      }
    }
  }
  return strs[0];
};

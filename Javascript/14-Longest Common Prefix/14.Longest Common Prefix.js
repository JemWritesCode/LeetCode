/**
 * @param {string[]} strs
 * @return {string}
 */
// Time Complexity: O(m x n) where m is the length of the shortest prefix, and n is the number of strings in the array. We traverse through that string and compare it to all others. In the worst case all words are the same so we traverse through them all.
// Space Complexity: O(1) - we are traversing through the arrays in place. Although we return a new object with slice we generally don't count things that are returned towards auxiliary memory.
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return ""; // constraints technically already covers this tho. But error handling.

  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (i === s.length || s[i] !== strs[0][i]) {
        return s.slice(0, i);
      }
    }
  }
  return strs[0]; // The entire first string is the common prefix
};

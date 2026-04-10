// #region 1 -- April 9, 2026
/**
 * @param {string[]} strs
 * @return {string}
 */

// Time Complexity: O(n * m)
// Space Complexity: O(1)
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

//#endregion

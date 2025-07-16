// #region 1 -- July 15 2025

/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity: O(n). As it's required.
// Space Complexity: O(n). Have to use set.
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 1;
      while (numSet.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};

// #endregion

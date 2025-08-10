/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array.
// Space Complexity: O(n) where n is the number of elements in the nums array. We have to make a set that holds all of the nums so that we have fast lookups.
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

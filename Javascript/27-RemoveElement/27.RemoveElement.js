/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Time Complexity: O(n) - we must visit each element of the nums array.
// Space Complexity O(1) - we are changing the values in place.
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[k++] = nums[i];
  }
  return k;
};

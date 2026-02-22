/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity: O(log n) -- It's just a twist on binary search. We're cutting the array that we are searching through in half with each iteration.
// Space Compelxity: O(1) -- No matter the size of the array passed in we just need 3 variables, we are traversing the array in place.

// For setting high we should set it to nums.length - 1 so that it starts on the last element of the array.
// Although Javascript is forgiving and won't crash for us being out of bounds we may as well not waste an iteration.

var searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return low;
};

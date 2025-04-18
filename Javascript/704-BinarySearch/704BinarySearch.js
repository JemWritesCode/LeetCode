/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Time complexity: O(log n). Divide in 2 every time.
// Space Complexity: O(1) just high and low pointers.
var search = function (nums, target){
  let low = 0,
      high = nums.length - 1;
  while (low <= high){
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) return mid;
      else if (target < nums[mid]) high = mid - 1;
      else low = mid + 1;
  }
  return -1;
}
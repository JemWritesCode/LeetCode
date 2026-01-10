// #region 2 -- Jan 9 2026
/**
 * @param {number[]} height
 * @return {number}
 */

// Time Complexity: O(n)
// Space Complexity: O(1)
var maxArea = function (height) {
  let result = 0,
    left = 0,
    right = height.length - 1;
  while (left < right) {
    let smallestSide = Math.min(height[left], height[right]);
    let area = (right - left) * smallestSide;
    if (area > result) result = area;
    height[left] < height[right] ? left++ : right--;
  }
  return result;
};
// #endregion

// #region 1 -- Jan 15 2025
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    let smallestSide = Math.min(height[left], height[right]);
    let area = (right - left) * smallestSide;
    if (area > result) result = area;
    if (height[left] < height[right]) left++;
    else right--;
  }
  return result;
};
// #endregion

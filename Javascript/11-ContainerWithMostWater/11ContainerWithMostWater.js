/*

Time Complexity: O(n)
The two pointers may have to traverse every element in the array to find the highest area.

Space Complexity: O(1)
We're just iterating over the height number array with a set number of pointers.

*/

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
    height[left] < height[right] ? left++ : right--;
  }
  return result;
};

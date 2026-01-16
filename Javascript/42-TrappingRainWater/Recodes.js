// #region 1 Jan 15 2026

/**
 * @param {number[]} height
 * @return {number}
 */

// Time Complexity: O(n) where n is the number of elements in the height array.
// Space Complexity: O(1) We use two pointers and just traverse through the array in place. We have the same amount of variables no matter the size of the height array that is passed in.
var trap = function (height) {
  let left = 0,
    right = height.length - 1,
    leftMax = height[left],
    rightMax = height[right],
    water = 0;
  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
    }
  }
  return water;
};

// #endregion

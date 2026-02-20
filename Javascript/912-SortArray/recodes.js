// #region 1 -- Feb 19, 2026

// Merge Sort
// Time: O(n log n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));
  return merge(left, right);
};

function merge(left, right) {
  let result = [],
    l = 0,
    r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) result.push(left[l++]);
    else result.push(right[r++]);
  }
  return [...result, ...left.slice(l), ...right.slice(r)];
}

// #endregion

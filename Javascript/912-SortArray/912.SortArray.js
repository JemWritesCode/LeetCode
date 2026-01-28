////// Merge Sort Solution. I should review other sorting algorithms too.

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
    leftPointer = 0,
    rightPointer = 0;

  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }
  return [...result, ...left.slice(leftPointer), ...right.slice(rightPointer)];
}

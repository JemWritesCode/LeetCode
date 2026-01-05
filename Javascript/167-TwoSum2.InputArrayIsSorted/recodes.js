// #region 3 -- Jan 4, 2026
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  for (let i = 0; i < numbers.length; i++) {
    if (left > right) throw new Error("No solution found for twoSum");
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum > target) right--;
    else left++;
  }
  k;
};

//#endregion

// #endregion

// #region 2 -- July 13 2025 --
// Solved this with no help! Apparently could've used a while loop tho, makes sense I don't always need an iterator even
// for questions asking for indicies because we already have pointers for the indicies I have to return.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Two Pointers
// Time Complexity: O(n) where n is the number of elements in the numbers array. In the worst case scenario we have to traverse the entire array looking for the two numbers needed to add up to target.
// Space Complexity: O(1) No matter the size of the numbers array we just need left, right, and sum variables.
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  for (let i = 0; i < numbers.length; i++) {
    if (left > right) throw new Error("No solution found for twoSum");
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum > target) right--;
    else left++;
  }
};

// #endregion

// #region 1 -- Jan 14 2025
// in a real world scenario it'd be a problem that this doesn't have a return when it doesn't hit target
// not all paths have a return basically.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let total = numbers[left] + numbers[right];
    if (total === target) return [left + 1, right + 1];
    else if (total > target) right--;
    else left++;
  }
};

// #endregion

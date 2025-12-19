// #region 3 -- Dec 18 2025
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time Complexity: O(n)
// Space Complexity: O(1)
var productExceptSelf = function (nums) {
  const result = new Array(nums.length);

  // Prefix
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  //Suffix
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
};

//#endregion

// #region 2 -- July 17 2025
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// prefix and postfix.
// Time Complexity: O(n) Where n is the number of elements in the nums array.
// We go forward through the array and then backwards for O(2n). When discussing asymptotic notation we generally drop the constant so we get O(n).
// Space Complexity: O(1) The problem description says the results array doesn't  count for space complexity. Other than that we just need the prefix and suffix variables no matter the size of the nums array.
var productExceptSelf = function (nums) {
  const result = new Array(nums.length);

  //Prefix
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  // Suffix
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
};

// #endregion

// #region 1 -- July 6 2025 -- I couldn't code it from memory but the code and concept make plenty of sense.
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. We must traverse through the array once to get the prefix, and then once more to get the suffix. This gives us O(2n). When discussing asymptotic notation we generally drop the constant so we get O(n).
// Space Complexity: O(1) We are traversing the array in place and only using the answer array to store the calculated values. The problem description says the answer array does not count for this problem.
var productExceptSelf = function (nums) {
  const answer = new Array(nums.length);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }
  return answer;
};

// #endregion

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time Complexity: O(n) - the spread operator iterates through each element of the nums array once. We get O(2n) but we drop the constant.
// Space Complexity: O(1) - if we don't count the auxiliary space
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

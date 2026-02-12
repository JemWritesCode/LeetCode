// #region 1 -- Feb 11, 2026

// Well this isn't very robust if we wanted to change the problem a bit. But it passes the test and I cracked it out without help.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = new Array();
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[nums.length + i] = nums[i];
  }
  return ans;
};

// this is what I had last time
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

// #endregion

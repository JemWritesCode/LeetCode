// #region 3 -- July 29 2025 -- Much better understanding of implementation now.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  const bucket = [];
  const result = [];
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let [num, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};

// #endregion

// #region 2 -- July 16 2025
// I knew the concept but struggled with implementation a bit but also working on this  late
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let [num, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};

// #endregion

// #region 1 -- May 20 2025
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Time Complexity O(n)
// Space Complexity O(n)
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};

// #endregion

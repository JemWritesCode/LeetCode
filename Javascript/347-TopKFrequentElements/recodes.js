// #region 6 -- Aug 6 2025

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Reverse Bucket Sort where the index of the array is the frequency that a num occurs in the nums array.
// Time Complexity: O(n)
// Space Complexity: O(n)

var topKFrequent = function (nums, k) {
  let freqMap = new Map();
  let bucket = [];
  let result = []; // This won't count towards asymptotic notation since it's for the output.

  // Make a hashmap that stores the number and the frequency that it occurs for fast lookups.
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Add it to the reverse bucket sort
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  // get the top k out of the buckets and put it into the result set.
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};

// #endregion

// #region 5 -- Aug 5 2025
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//Time Complexity: O(n) where n is the number of elements in the nums array.
// Space Complexity: O(n) where n is the number of elements in the nums array. Worst case all elements are unique and the map holds every element of the nums array
var topKFrequent = function (nums, k) {
  // count frequency of each number in the nums array and store it in a map
  let freqMap = new Map();
  let bucket = [];
  let result = [];
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  // Bucket sort but the index is the frequency
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  // get the top k out of the bucket sorted array.
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]); // get all of the sets at that index with the spread operator
    if (result.length === k) break; // thats enough slices!!!
  }
  return result;
};

// #endregion

// #region 4 -- July 31 2025 -- Needed a little help with implementation. I wrote the asymptotic notation this time but then had AI help me refine it.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// This implements a frequency counting approach, similar in concept to a bucket sort.

// Time Complexity: O(n) where n is the number of elements in the nums array.
// 1. Traversing the `nums` array to populate the `map`: O(n) as we visit each element once. Map operations (get, set) are average O(1).
// 2. Iterating through the `map` to populate the `bucket` array: In the worst case, there are `n` unique numbers in `nums`, meaning the map has `n` entries. Thus, this loop is O(n). Set creation and add operations are average O(1).
// 3. Iterating through the `bucket` array to construct the `result`: The `bucket` array can have indices up to `n` (representing frequencies). In the worst case, we might iterate through most of the `n` possible frequency levels. We stop once `k` elements are found. Since `k` can be up to `n`, this step is also bounded by O(n).
// Combining these steps, the total time complexity is O(n + n + n) which simplifies to O(n) after dropping constants.

// Space Complexity: O(n) where n is the number of elements in the nums array.
// 1. The `map` stores unique numbers and their frequencies. In the worst case, all `n` numbers are unique, requiring O(n) space.
// 2. The `bucket` array stores sets of numbers keyed by their frequency. The array itself can have a length up to `n` (corresponding to frequencies from 1 to n). The total number of elements stored across all Sets within the `bucket` array is the number of unique elements, which is at most `n`.
// Therefore, the total auxiliary space required by both the `map` and `bucket` structures is proportional to n, resulting in O(n) space complexity.
var topKFrequent = function (nums, k) {
  const map = new Map();
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

//#endregion

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

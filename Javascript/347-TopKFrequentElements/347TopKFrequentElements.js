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

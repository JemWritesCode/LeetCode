// #region 36 -- July 29 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we add every element of the nums array to the hash map as we look for it.
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for TwoSum");
};

// #endregion

// #region 35 -- July 21 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array and we traverse the entire nums array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array and we add every element of the nums array to the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for TwoSum");
};

//#endregion

// #region 34 -- July 18 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array and we store every element of the nums array into the hash map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum");
};

// #endregion

// #region 33 -- July 6 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we add every element to the Map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum");
};

// #endregion

// #region 32 -- June 24 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) in the worst case scenario the complement needed is at the end of the nums array and we traverse the entire array looking for it
// Space Complexity: O(n) in the worst case scenario the complement needed is at the end of the nums array and we add every element of the nums array to the map as we look for it.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for TwoSum");
};

// #endregion

// #region 31 -- June 13 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array and we copy every element in the array into the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for TwoSum");
};

// #endregion

// #region 30 -- June 9 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array so we traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array so we add every element of the nums array to the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for TwoSum");
};

// #endregion

// #region 29 -- June 6 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array and we traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array and we add every element of the nums array to the map before we find the diff.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum");
};

// #endregion

// #region 28 -- June 4 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end so we traverse the entire array looking for it
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array so we copy every element of the nums array into the map
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for TwoSum");
};

// #endregion

// #region 27 June 1 2015
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we traverse the entire array looking for it.

// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we add every element of the nums array to the map as we search for it.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No Solution found for twoSum");
};

// #endregion

// #region 26 -- May 31 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array so we traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array so we copy every element of the nums array into the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum");
};

// #endregion

// #region 25 -- May 27 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* SCOPE 
There is only one solution that works. 
*/

/* ALGORITHM
    Traverse through the array and we need to find the complementary number to the current number
    that would add up to target.
    We will store numbers in a hash map as we go along for fast lookups and so we have a list of
    potential complementary numbers that only contains the numbers we've gone through so far

**  ASYMPTOTIC NOTATION
    Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array and we traverse the entire array looking for it.

    Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array and we store every element of the nums array in the hash map before we find it.
*/
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
};

// #endregion

// #region 24 -- May 22 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Time Complexity: O(n) where n is equal to the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array so we have to traverse the entire array looking for it.
// Space Complexity: O(n) where n is equal to the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array so we add every element to the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum");
};

// #endregion

// #region 23 -- May 20 2025 -- Got it perfectly in one go while explaining outloud. 5 minutes.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed complement is at the end of the nums array so we traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case the needed complement is at the end of the nums array so we copy every element of the nums array into the map.
var twoSum = function (nums, target) {
  // nums[i] + complement = target
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [i, map.get(complement)];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum");
};

// #endregion

// #region 22 -- May 19 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we traverse the entire array before we find it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we copy every element of the nums array into the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum.");
};

// #endregion

// #region 21 -- May 17 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for two Sum");
};

// #endregion

// #region 20 -- May 16 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at teh end of the nums array so we must traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array so we add every element of the nums array to the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum.");
};

// #endregion

// #region 19 -- May 13 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In worst case the needed diff is at the end of the array so we traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In worse case scenario the needed diff is at teh ened of the array so we add every element of the nums array to the map as we look for it.
var twoSum = function (nums, target) {
  // every num there's a difference from the target that will add up to the target. so num + diff = target.
  // we'll store this in a hash map so that as we go along we have the diff.
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum");
};

// #endregion

// #region 18 -- May 12 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is the last number in the array so we search the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is the last number in the arary so we add every element to the map as we look for it. This is both the key and value which gives us O(2n) but we drop the constants when talking asymptotic notation so we get O(n)
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
  throw new Error("twoSum has no solution");
};

// #endregion

// #region 17 -- May 9 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) in the worst case scenario the needed diff is the last element of the nums array and we traverse the entire array looking for it.
// Space Complexity: O(n) in the worst case scenario the needed diff is the last element of the nums array and we store every element of the nums array into the map while looking for it.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
  throw new Error("No solution for twoSum");
};

// #endregion

// #region 16 -- May 6 2025 -- got it in one go

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is the last element in the array so we must traverse the entire array looking for it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is the last element in the array so we must add every element in the nums array before it to the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum.");
};

// #endregion

// #region 15 -- May 5 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the diff needed is the last element in the nums array so we search the entire array looking for it.
// Space Complexity: O(n) where n is the number of elments in the nums array. In the worst case scenario the diff needed is the last element in the nums array so we store the entire array in the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
  throw new Error("No solution found for twoSum.");
};

// #endregion

// #region 14 -- April 27 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is the last element in the nums array and we search the entire array to find it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is the last element in the nums array so we have to store every element in the map before we find it.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution for Two Sum");
};

// #endregion

// #region 13 -- April 26 2025 -- better way of throwing an error.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the diff number needed is the last element so we have to traverse n-1 elements to find it. We drop constant so we get O(n)
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the diff number needed is the last element so we store n-1 elements in the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  throw new Error("No solution for twoSum.");
};

// #endregion

// #region 12 -- March 27 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return -1;
};

// #endregion

// #region 11 -- March 5 2025 -- First time getting this one without any mistakes in one go. Pretty quickly too.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array so we must traverse the entire array to find it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the array so we copy all elements into the map to find it.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return -1;
};

// #endregion

// #region 10 -- March 1 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case the needed diff is at the end of the nums array so we must traverse the entire array to find it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case the diff we need is at the end of the nums array and we must copy all of the elements of the nums array into the map.

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return -1;
};

// #endregion

// #region 9 -- Feb 18 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array and we have to search all the elements to find it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array so we copy all of the elements into the map to find it.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return -1;
};

// #endregion

// #region 8 -- Feb 17 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array so we have to traverse the entire array to find it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array so we need to copy them all into the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return -1;
};

// #endregion

// #region 7 -- Feb 16 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// use a map to store the diffs along the way.
// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the needed diff is at the end of the nums array so we have to traverse the entire array to find it.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case the needed diff is at the end of the nums array so we have to store everything from the nums array into the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [i, map.get(diff)];
    map.set(nums[i], i);
  }
  return -1;
};
// #endregion

//  #region 6 -- Feb 15 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the diff needed is at the end so we have to go over every other element to get there.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario the diff needed is at the end so we have to store every element of the nums array in the map.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return false;
};

// #endregion

// #region 5 -- Feb 13 2025

// Time Complexity: O(n) where n is the number of elements in the nums array. in the worst case the needed diff is at the end of the nums array.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case the needed diff is at the end of the nums array so map becomes a copy of the nums array.
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return null;
};

// #endregion

// #region 4 -- Feb 11 2025

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. worst case the diff needed is at the end of the nums array.
// Space Complexity: O(n) where n is the number of elements in the nums array. worst case the diff number needed is at the end of the nums array so map becomes a copy of nums. really it's storing the number and the index so it's O(2n) but we drop constants when discussing big o so we make it O(n)
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return null;
};

// #endregion

// #region 3 -- Feb 9 2025

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return null;
};

// #endregion

// #region 2 -- 1/5/2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return null;
};

// #endregion

// #region 1 -- 1/4/2025
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return null;
};

// #endregion

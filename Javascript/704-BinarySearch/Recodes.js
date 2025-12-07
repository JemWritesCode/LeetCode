// #region 26 -- Dec 7 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};
// #endregion

// #region 25 -- Oct 8 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */ v;

// Time Complexity: O(log n) where n is the number of elements in the nums array. We cut the searchable area in half each time as we look for the target.
// Space Complexity: O(1) We traverse the nums array in place. We only need the low, high, and mid variable no matter the size of the nums array.
var search = function (nums, target) {
  let low = 0,
    high = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 24 -- spe 9 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity: O(log n) where n is the number of elements in the nums array. In the worst case scenario the target does not exist in the array. We keep dividing the searchable area in half each time so we get log n.
// Space Complexity: O(1) No matter the size of the nums array passed in we just need the low, high, and mid variables to traverse the array in place.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

//#endregion

// #region 23 -- Aug 22 2025 -- practiced outloud 1 go
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Binary Search

// Asymptotic Notation
// Time Complexity: O(log n) where n is the number of elements in the nums array. We are cutting the searchable area in half every time.
// Space Complexity: O(1) No matter the size of the nums array passed in we just need the low, high, and mid pointers. We traverse the array in place.

var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

//#endregion

// #region 22 -- Aug 10 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search

// Time Complexity: O(log n) where n is the number of elements in the nums array. We cut the searchable area in half each time as we look for the target int.
// Space Complexity: O(1) No matter the size of the nums array we just need the low high and mid pointers. We traverse the array in place
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

//#endregion

// #region 21 -- Aug 4 2025

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((low + high) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

//#endregion

// #region 20 -- July 22 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search Algorithm
// Time Complexity: O(log n) where n is the number of elements in the nums array. We divide the searchable area in half each time.
// Space Complexity: O(1) No matter the size of the array passed in we just need the low, high, and mid pointers. We traverse the array in place.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

// #endregion

// #region 19 -- July 8 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity: O(log n) where n is the number of elements in the nums array. We cut the searchable area in half each time we iterate through the loop.
// Space Complexity: O(1) No matter the size of the nums array we just need the low,high, and mid pointers. We traverse the array in place.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 18 -- July 6 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search
// Time Complexity: O(log n) where n is the number of elements in the nums array. We cut the searchable area in half each time as we look for target.
// Space Complexity: O(1) No matter the size of the nums array we just need the 3 pointers low high and mid and we traverse the nums array in place.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 17 -- June 25 2025

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Time Complexity: O(log n) where n is the number of elements in the nums array. We cut the searchable area within nums in half each time as we look for target.
// Space Complexity: O(1) No matter the size of the nums array that is passed in we just need the low, high, and mid pointers.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

// #endregion

// #region 16 -- June 1 2025

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Time Complexity: O(log n) where n is the number of elements in the nums array. Each time we seach the nums array for the target we cut the area we search within in half.

// Space Complexity: O(1) No matter the size of the input we just need the low, high, and mid pointers.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 15 -- May 20 2025 -- In one go while explaining outloud.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity: O(log n) where n is the number of elements in the nums array. We cut the area we are searching in half each time.
// Space Complexity: O(1) no matter the size of the nums array passed in we just need the low, high, and mid pointers.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((low + high) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

// #endregion

// #region 14 -- May 14 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Binary Search

// Time Complexity: O(log n). Each time we search for the target we cut the searched area in half.
// Space Complexity: O(1) No matter the size of the nums array passed in we just need the 3 pointers low, high, and mid
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

//

// #region 13 -- May 12 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Binary Search
// Time Complexity: O(log n) where n is the number of elements in the nums array. Each time we search we cut the amount of the array we search in half.
// Space Complexity: O(1) No matter the size of the nums array that is passed in we still just need the 3 pointers low, high, and mid.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 12 -- May 11 2025

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity: O(log n) where n is the number of elements in the nums array. We are halving the area we search in the array each time.
// Space Complexity: O(1) no matter the size of the nums array passed in we just use low mid and high pointers.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

// #endregion

// #region 11 -- April 27 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity: O(log n) where n is the number of elements in the nums array. We divide the amount of the array we're searching in by half each time as we look for target.
// Space Complexity: O(1) We just use the same low, high, and mid pointers no matter the size of the nums array.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (target === nums[i]) return i;
    else if (nums[i] < high) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 10 -- March 3 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity: O(log n) where n is the number of elements in the nums array. We cut the array in half each time as we search for the target.
// Space Complexity: O(1) Because no matter the size of the nums array we just need the 3 pointers low, high, and mid to search through it.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (target === nums[i]) return i;
    else if (target < nums[i]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 9 -- Feb 27 2025 -- Got it one go, no errors while explaining it outloud.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity: O(log n) where n is the number of elements in the nums array. We cut the array in half each time as we search for the target.
// Space Complexity: O(1) Because no matter the size of the nums array we just need the 3 pointers low, high, and mid to search through it.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((high + low) / 2);
    if (target === nums[i]) return i;
    else if (target < nums[i]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 8 -- Feb 23 2025 - First time getting it almost entirely by myself. Small syntax mistake I had to fix.
// Time Complexity: O(log n) - Where n is the number of elements in the nums array. We divide the array in half each time as we search for target.
// Space Complexity: O(1) - No matter the size of the nums array we just have the same 3 pointers low, mid, and high.

var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

// #endregion

// #region 7 -- Feb 18 2025
// Time Complexity: O(logn) where n is the number of elements in the nums array. We divide the array in half each time we search.
// Space Complexity: O(1) we just need the low and high pointers no matter the size of the nums array.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 6 --  Feb 11 2025
// Time Complexity: O(logn) where n is the number of elements in the nums array. We divide it in half each time as we search.
// Space Complexity: O(1) we just need the low and high pointers no matter the size of the nums array.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 5 -- Feb 8 2025
// Time Complexity: O(log n) where n is the number of elements in the nums array. We divide it in half each time as we search for target.
// Space Complexity: O(1) we just need the low and high pointers no matter the size of the nums array.

var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 4 -- Feb 5 2025
// time: O(log n) divide nums in half each time
// space: O(1) just two pointers no matter the size of the array
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 3 -- Feb 3 2025

//Time Complexity: O(log n) Divide the whole nums array in half every time
// Space Complexity: O(1) just high and low pointers no matter the size of the nums array

var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};
// #endregion

// #region 2 -- Feb 2 2025
// Time complexity: O(log n). Divide in 2 every time.
// Space Complexity: O(1) just high and low pointers.
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

// #region 1 -- Jan 8 2025

var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// #endregion

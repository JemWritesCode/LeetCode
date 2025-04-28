// #region 11 -- April 27 2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 // Time Complexity: O(log n) where n is the number of elements in the nums array. We divide the amount of the array we're searching in by half each time as we look for target.
 // Space Complexity: O(1) We just use the same low, high, and mid pointers no matter the size of the nums array. 
 var search = function(nums, target) {
    let low = 0,
        high = nums.length - 1;
    for (let i = 0; i < nums.length; i++){
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
 var search = function(nums, target) {
    let low = 0,
        high = nums.length - 1;
    for (let i = 0; i < nums.length; i++){
        let mid = Math.floor((high + low) / 2);
        if(target === nums[i]) return i;
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
 var search = function(nums, target) {
    let low = 0,
        high = nums.length - 1;
    for (let i = 0; i < nums.length; i++){
        let mid = Math.floor((high + low) / 2);
        if(target === nums[i]) return i;
        else if (target < nums[i]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
};

// #endregion 

// #region 8 -- Feb 23 2025 - First time getting it almost entirely by myself. Small syntax mistake I had to fix. 
// Time Complexity: O(log n) - Where n is the number of elements in the nums array. We divide the array in half each time as we search for target.
// Space Complexity: O(1) - No matter the size of the nums array we just have the same 3 pointers low, mid, and high. 

var search = function(nums, target){
    let low = 0,
        high = nums.length - 1;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        if(target > nums[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

// #endregion 

// #region 7 -- Feb 18 2025
// Time Complexity: O(logn) where n is the number of elements in the nums array. We divide the array in half each time we search.
// Space Complexity: O(1) we just need the low and high pointers no matter the size of the nums array. 
var search = function(nums, target){
    let low = 0,
        high = nums.length -1;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        else if (target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

// #endregion 

// #region 6 --  Feb 11 2025
// Time Complexity: O(logn) where n is the number of elements in the nums array. We divide it in half each time as we search.
// Space Complexity: O(1) we just need the low and high pointers no matter the size of the nums array. 
var search = function (nums, target){
    let low = 0,
        high = nums.length - 1;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        else if (target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

// #endregion

// #region 5 -- Feb 8 2025
// Time Complexity: O(log n) where n is the number of elements in the nums array. We divide it in half each time as we search for target.
// Space Complexity: O(1) we just need the low and high pointers no matter the size of the nums array.

var search = function(nums,target){
    let low = 0,
        high = nums.length - 1;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] === target) return mid;
        else if (target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

// #endregion

// #region 4 -- Feb 5 2025
// time: O(log n) divide nums in half each time
// space: O(1) just two pointers no matter the size of the array
var search = function (nums, target){
    let low = 0,
        high = nums.length - 1;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        else if  (target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

// #endregion 

// #region 3 -- Feb 3 2025

//Time Complexity: O(log n) Divide the whole nums array in half every time
// Space Complexity: O(1) just high and low pointers no matter the size of the nums array

var search = function (nums, target){
    let low = 0,
        high = nums.length - 1;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        else if (target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}
// #endregion 

// #region 2 -- Feb 2 2025
// Time complexity: O(log n). Divide in 2 every time.
// Space Complexity: O(1) just high and low pointers.
var search = function(nums, target){
    let low = 0,
        high = nums.length - 1;
    while (low <= high){
        let mid = low + Math.floor((high - low)/2);
        if (nums[mid] === target) return mid;
        else if (target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

// #endregion

// #region 1 -- Jan 8 2025

var search = function(nums, target){
    let low = 0;
    let high = nums.length - 1;
    while (low <= high){
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === target)
            return mid;
        else if (target < nums[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

// #endregion
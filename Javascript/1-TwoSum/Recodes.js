// #region Feb 13 2025

// Time Complexity: O(n) where n is the number of elements in the nums array. in the worst case the needed diff is at the end of the nums array.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case the needed diff is at the end of the nums array so map becomes a copy of the nums array.
var twoSum = function (nums, target){
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return null;
}

// #endregion

// #region Feb 11 2025

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. worst case the diff needed is at the end of the nums array.
// Space Complexity: O(n) where n is the number of elements in the nums array. worst case the diff number needed is at the end of the nums array so map becomes a copy of nums. really it's storing the number and the index so it's O(2n) but we drop constants when discussing big o so we make it O(n)
var twoSum = function(nums, target){
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if(map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return null;
}

// #endregion

// #region Feb 9 2025

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return null;
};

// #endregion

// #region 1/5/2025
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if (map.has(diff))
            return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return null;
};

// #endregion


// #region 1/4/2025
var twoSum = function(nums, target){
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if (map.has(diff))
            return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return null;
}

// #endregion
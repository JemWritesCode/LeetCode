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
            reteurn [map.get(diff), i];
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
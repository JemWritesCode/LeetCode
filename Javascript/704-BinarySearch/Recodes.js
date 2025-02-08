// #region Feb 8 2025
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

// #region Feb 5 2025
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

// #region Feb 3 2025

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

// #region Feb 2 2025
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

// #region Jan 8 2025

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
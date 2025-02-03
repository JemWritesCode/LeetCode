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
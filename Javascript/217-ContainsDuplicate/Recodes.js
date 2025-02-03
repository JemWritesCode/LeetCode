// #region Feb 2 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 //time complexity: o(n)
 //space complexity: o(n)
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for(const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};
// #endregion
// #region Feb 1 2025
// Time Complexity: O(n) - Worst case no duplicates have to add everything to the seen set.
// Space Complexity: O(n) worst case no duplicates eerything added to the seen set.

var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 
// #region Jan 5 2025

var containsDuplicate = function(nums) {
    return nums.length != new Set(nums).size;
};
// #endregion

// #region Jan 4 2025
var containsDuplicate = function(nums){
    return new Set(nums).size != nums.length;
};
// #endregion
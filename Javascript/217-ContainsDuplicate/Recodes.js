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
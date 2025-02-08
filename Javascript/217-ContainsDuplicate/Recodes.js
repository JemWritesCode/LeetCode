// #region Feb 7 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is equal to the number of elements in the nums array. because in the worst case there are no duplicates so you must traverse the entire nums array.
 // Space Complexity: O(n) where n is equal to the number of elements in the nums array. because in the worst case there are no duplicates so the seen set has to hold all of the elements of the nums array.
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};
// #endregion 

// #region Feb 6 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. in the worst case there are no duplicates and you have to traverse the entire array.
 // Space Complexity: O(n) where in is the number of elements in the nums array. In the worst case there are no duplicates and the seen Set will be a copy of the nums array.
 var containsDuplicate = function(nums) {
    let seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion
// #region Feb 4 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // time complexity: o(n) in worst case must visit every num in nums. no duplicates.
 // space complexity: o(n) in worst case no duplicates Set will have every num of nums
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        else seen.add(num);
    }
    return false;
};

// #endregion 

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
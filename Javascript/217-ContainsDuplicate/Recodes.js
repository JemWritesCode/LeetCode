// #region 34 -- May 9 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates so we search the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we copy every element of the nums array into the seen set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion

// #region 33 -- May 6 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we search the entire array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we add every element of the nums array to the seen set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for(const num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion

// #region 32 -- May 5 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates so we traverse the entire nums array looking for one.
// Space Complexity: O(n) where n is the number of elments in the nums array. In the worst case scenario there are no duplicates and we copy every element of the nums array into the seen set. 
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion

// #region 31 -- May 3 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we traverse the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we copy every element of the nums array into the seen set as we look for one. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion

// #region 30 -- April 27 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we traverse the entire nums array looking for one. 
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we add every element of the nums array to the seen set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 29 -- April 26 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicate numbers so we search the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates so we copy every element of the nums array into the seen set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 28 -- April 23 2025

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicate numbers so we search the entire array looking for one.
 // Space Complexity: O(n) where n is the number of elments in the nums array. In the worst case scenario there are no duplicate numbers so we add each element from the nums array into the seen set.
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion

// #region 27 -- April 21 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we traverse the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we copy every element of the nums array into the seen set.
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 26 -- April 11 2025

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we traverse the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we copy every element of the nums array into the seen set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 25 -- April 3 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we traverse the entire array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we copy every element of the nums array into the seen set.
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if(seen.has(num)) return true;
        seen.add(num)
    }
    return false;
};

// #endregion

// #region 24 -- March 28 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we search the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicate and we add every element from the nums array to the seen set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 23 -- March 25 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates in the nums array and we search the entire array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates in the nums array and we add all elements of the nums array to the Set.
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};
// #endregion

// #region 22 -- March 10 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we traverse the entire nums array looking for one.
// Space Complexity: O(n) where n is the number of elements in the nums arrya. In the worst case scenario there are no duplicates and we copy every element of the nums array into the seen Set. 

var containsDuplicate = function(nums){
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

//#endregion 

// #region 21 -- Mar 1 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case there are no duplicates and we traverse the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we add every element of the nums array to the seen set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 20 -- Feb 26 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there is no duplicate and we traverse the entire array looking for one. 
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there is no duplicate and we add every element of the nums array to the Set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 19 -- Feb 25 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there is no duplicate so we traverse the entire array looking for the duplicate and trying to add them to set.
 
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there is no duplicate so we traverse the entire nums array and add it to the seen Set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 18 -- Feb 22 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we traverse the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we copy every num from nums into the Set.
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 17 -- Feb 18 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates so we traverse the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates so we copy every element from the nums array into the seen Set. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 16 -- Feb 17 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there is no duplicate and we have to go through the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case there is no duplicate so the Set ends up having every element from the nums array. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 15 --  Feb 16 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we search the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and we copy ever element from the nums array into the Set.
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 14 -- Feb 15 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates so we traverse the entire nums array looking for one.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates so the seen Set contains every element of the nums array. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 13 -- Feb 13 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case there are no duplicates and we traverse the entire nums array looking for one.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case there are no duplicates and seen becomes a copy of the nums array. 
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion

// #region 12 -- Feb 12 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are  no duplicates and we must traverse the entire nums array.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates and the seen set becomes a copy of the nums array. 
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 11 -- Feb 11 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case there are no duplicates so you traverse the entire nums array.
 // Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case there are no duplicates so the seen set becomes a copy of the nums array.
 var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 10 -- Feb 10 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates so we visit ever element of the nums array.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario there are no duplicates so the seen Set becomes a copy of the nums array.
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion 

// #region 9 -- Feb 9 2025
// Time complexity: O(n) where n is the number of elements in nums. In the worst case scenario there are no duplicates so we traverse the entire nums array.
// Space Complexity: O(n) where n is the number of elements in nums. In the worst case scenario there are no duplicates so seen becomes a copy of nums.
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion

// #region 8 -- Feb 8 2025
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of elements in the nums array. In the worst case no duplicates we must traverse the entire nums array.
// Space Complexity: O(n) where n is the number of elements in the nums array. In the worst case scenario no duplicates we must put every num into the Set.
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (num of nums){
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// #endregion

// #region 7 -- Feb 7 2025
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

// #region 6 -- Feb 6 2025
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
// #region 5 -- Feb 4 2025
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

// #region 4 -- Feb 2 2025
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
// #region 3 -- Feb 1 2025
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
// #region 2 -- Jan 5 2025

var containsDuplicate = function(nums) {
    return nums.length != new Set(nums).size;
};
// #endregion

// #region 1 -- Jan 4 2025
var containsDuplicate = function(nums){
    return new Set(nums).size != nums.length;
};
// #endregion
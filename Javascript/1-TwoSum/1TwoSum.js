/* Hash Map

 // Time Complexity: O(n) where n is the number of elements in the nums array. 
 // In the worst case scenario the diff number needed is the last element so we have to traverse n-1 elements to find it. 
 // We drop constant so we get O(n). For each element we perform constant time operations (hash table lookup and insertion).

 // Space Complexity: O(n) where n is the number of elements in the nums array. 
 // In the worst case scenario the diff number needed is the last element so we store n-1 elements in the map.
 
*/

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
    throw new Error ("No solution for twoSum.");
};

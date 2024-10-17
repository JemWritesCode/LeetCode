/* Hash Map

Time Complexity: O(n)
We must go over up to every single element in the array nums to find the two numbers needed. 
For each element we perform constant time operations (hash table lookup and insertion)

Space Complexity: O(n)
We may need to store up to n-1 elements in the hash table before we find the solution. 
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
        if (map.has(diff))
            return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return null;
};
/* 
Time complexity: (n * n!)
There are n! permutations for n numbers. 
We spend O(n) time slicing the list in the recursive call.

Space Complexity( n * n!)
n! permutations for n numbers.
each permutation is a list of "n" numbers.
recursion stack contributes O(n) space for each level of recursion.
*/ 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const backtrack = (nums, path) => {
        if (nums.length === 0) {
            result.push(path);
            return;
        }
        for (let i = 0; i < nums.length; i++) 
            backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);
    };
    backtrack(nums, []);
    return result;
};
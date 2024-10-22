/* Prefix and Suffix

Time Complexity: O(n)
You must traverse the entire array to calculate prefix, and then
go backwards to calculate the suffix. This gives us O(2n). We drop the constant for BigO to get O(n).

Space Complexity: O(1)
The problem description says that the answer array does not count.
Other than that we just have one variable for the prefix and suffix.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = new Array(nums.length);
    let prefix = 1;
    for (let i = 0; i < nums.length; i++){
     answer[i] = prefix;
     prefix *= nums[i];   
    }
    let suffix = 1;
    for (let i = nums.length - 1; i >=0; i--){
        answer[i] *= suffix;
        suffix *= nums[i];
    }
    return answer;
};
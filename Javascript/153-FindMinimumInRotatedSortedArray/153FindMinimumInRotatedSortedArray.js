/* Binary Search
Time Complexity: O(logn)
* cut it in half each time with binary search
Space Complexity: O(1)
* we have the same number of variables no matter the input size, and we just iterate over the passed in nums

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < nums[right]) 
            right = mid; // Min is in the left half (including mid)
         else 
            left = mid + 1; // Min is in the right half
    }
    return nums[left]; 
};

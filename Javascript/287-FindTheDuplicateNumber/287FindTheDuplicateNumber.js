/* Floyd's Cycle Detection with Tortoise and Hare
Time complexity: O(n)
* We have to traverse through the entire nums array. It's O(2n) but reduces to O(n)
Space complexity: O(1)
Need the same 3 pointers regardless of the size of the input array nums. 
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0,
        fast = 0;
    while (true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast)
            break;
    }
    let slow2 = 0; 
    while (true){
        slow = nums[slow];
        slow2 = nums[slow2];
        if (slow === slow2)
            return slow;
    }
};
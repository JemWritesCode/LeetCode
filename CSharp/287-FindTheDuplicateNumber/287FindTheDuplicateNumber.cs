// Fast and Slow Pointers. (Floyd's Tortoise and Hare / Floyd's Cycle Detection)

// Time Complexity: O(n) (Analyze Complexity Confirmed)
// It's O(2n) and you drop the constant 2. You have to go through up to every element of the array to find the intersection of the cycle and then again to find the start of the cycle.

// Space Complexity: O(1) (Analyze Complexity Confirmed)
// we just use 2 pointers slow and fast that will always be the same no matter the size of nums.

public class Solution {
    public int FindDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[0];
        
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);
        
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        
        return slow;
    }
}
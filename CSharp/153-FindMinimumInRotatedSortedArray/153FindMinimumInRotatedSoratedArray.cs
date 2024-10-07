// Binary Search

// Time Complexity: O(log n)
// cutting the array in half each time. we're looking for the pivot/minimum. 

// Space Complexity: O(1)
// We have a constant number of variables (Left and Right) no matter the size of the array.

public class Solution {
    public int FindMin(int[] nums) {
        int left = 0, right = nums.Length - 1;
        while (left < right){
            int mid = left + (right - left) / 2;
            if (nums[mid] < nums[right])
                right = mid;
            else left = mid + 1;
        }
        return nums[left];
    }
}
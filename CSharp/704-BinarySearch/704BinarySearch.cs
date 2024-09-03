// BINARY SEARCH
// Time Complexity: O(log n) (Analyze Complexity Verified)
//      You're dividing the input set by 2 each time and ruling out those indexes
// Space Complexity: O(1)
//      We just need the start and end index

public class Solution {
    public int Search(int[] nums, int target) {
        int startIndex = 0;
        int endIndex = nums.Length - 1;
        while (startIndex <= endIndex){
            int midIndex = (startIndex + endIndex)/2;
            if (target == nums[midIndex]) return midIndex;
            else if (target < nums[midIndex]) endIndex = midIndex -1;
            else startIndex = midIndex + 1;
        }
        return -1;
    }
}
// TWO POINTERS
// Basically you have a "start" value for the triplet. The other two is just like solving Leetcode Two Sum II.

// Time Complexity: O(n^2)
// Sorting the array is O(n log n) and then the two nested loops is O(n^2) so it becomes O(n^2)

// Space Complexity: O(n + k)
// k is the number of triplets. n is the length of the input array for sorting.

public class Solution {
    public IList<IList<int>> ThreeSum(int[] nums) {
        IList<IList<int>> result = new List<IList<int>>();
        if (nums.Length < 3) return result;
        Array.Sort(nums);
        for (int start = 0; start < nums.Length - 2; start++) {
            if (start > 0 && nums[start] == nums[start - 1]) continue; 
            int target = -nums[start];  
            int left = start + 1, right = nums.Length - 1;
            while (left < right) {
                int sum = nums[left] + nums[right];
                if (sum == target) {
                    result.Add(new List<int>{ nums[start], nums[left], nums[right] });
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
}
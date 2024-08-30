// Hash Set
// I kind of get how this is more effective because of index search with hash but I'd like to review this a bit more

// Time Complexity: O(n)
// Space Complexity: O(n)

public class Solution {
    public int LongestConsecutive(int[] nums) {
        HashSet<int> hashSet = new HashSet<int>(nums);
        int result = 0;

        foreach (int num in nums){
            if (!hashSet.Contains(num - 1)){
                int length = 0;
                while(hashSet.Contains(num + length)){
                    length++;
                }
                result = Math.Max(result, length);
            }
        }
        return result;
    }
}
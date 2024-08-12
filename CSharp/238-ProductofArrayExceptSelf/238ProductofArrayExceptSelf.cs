//////////////////////////////////////////
// BRUTE FORCE
// Time Complexity: O(n^2)
// Space Complexity: O(n)
public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int[] result = new int[nums.Length];
        for(int i = 0; i < nums.Length; i++){
            result[i] = 1; // otherwise it will multiply by 0 to start
            for (int k = 0; k < nums.Length; k++){
                if (k != i){
                    result[i] *= nums[k];
                }
            }
        }
        return result;
    }
}
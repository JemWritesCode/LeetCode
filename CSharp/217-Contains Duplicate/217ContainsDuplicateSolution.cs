/* BRUTE FORCE
Time Complexity: O(N^2)
Space Complexity: O(1)
*/

// public class Solution {
//     public bool ContainsDuplicate(int[] nums)
//     {
//         for (int i = 0; i < nums.Length; i++){
//             for (int j = i + 1; j < nums.Length; j++){
//                 if (nums[i] == nums[j]) return true;
//             }
//         }
//         return false;
//     }
// }

////////////////////////////////////////////////////////
/* HASH SET
Time Complexity: O(N)
Space Complexity: O(N)
*/
// Duplicate elements are not allowed in a Hash Set. So if it's a different size than the nums array there were duplicates.
// If you attempt to insert a duplicate element into a HashSet it would simply be ignored but no runtime exception will be thrown. 
public class Solution {
    public bool ContainsDuplicate(int[] nums)
    {
        return nums.Length != new HashSet<int>(nums).Count; 
    }
}
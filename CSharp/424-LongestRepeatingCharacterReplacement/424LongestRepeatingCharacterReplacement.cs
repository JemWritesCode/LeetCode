// Sliding Window

// Time Complexity: O(n) (Analyze Complexity Confirmed)
// Each character visited at most once.

// Space Complexity: O(1) (Analyze Complexity Confirmed)
// constant number of variables no matter the input size.

public class Solution {
    public int CharacterReplacement(string s, int k) {
        if(string.IsNullOrEmpty(s)) return 0;

        int[] count = new int[26]; 
        int maxCount = 0, maxLength = 0, left = 0, right = 0; 
        while(right < s.Length){
            count[s[right] - 'A']++; // count current character
            maxCount = Math.Max(maxCount, count[s[right] - 'A']);
            if (right - left + 1 - maxCount > k) {
                count[s[left] - 'A']--;
                left++; 
            }
            maxLength = Math.Max(maxLength, right - left + 1);
            right++;
        }
        return maxLength;
    }
}
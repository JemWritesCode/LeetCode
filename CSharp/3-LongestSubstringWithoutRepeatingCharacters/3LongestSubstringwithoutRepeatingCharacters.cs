// Sliding Window

// Time Complexity: O(n)
// Each character is processed at most twice (once by right and once by left)

// Space Complexity O(min(n,m))
// m is the size of the character set, n is the length of the string. 
public class Solution {
    public int LengthOfLongestSubstring(string s) {
        var charSet = new HashSet<char>();
        int left = 0, maxLength = 0;
        for (int right = 0; right < s.Length; right++){
            while (charSet.Contains(s[right])){
                charSet.Remove(s[left]);
                left++;
            }
            charSet.Add(s[right]);
            maxLength = Math.Max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
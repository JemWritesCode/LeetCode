// HASH MAP / DICTIONARY

// TIME COMPLEXITY: O(n * nlogn) 
// Leetcode Analyzer time complexity: O(N∗M∗LogM)
// n = average length of each input string * the time to sort each string

// SPACE COMPLEXITY: O(n)

// We sort the anagrams and make a dictionary with the sorted strings as keys.
// The Dictionary/Hashmap values are the original strings.
public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        if (strs == null || strs.Length == 0)
        {
            return new List<IList<string>>();
        }
        Dictionary<string, List<string>> map = new Dictionary<string, List<string>>();
        foreach (string s in strs){
            char[] ch = s.ToCharArray();
            Array.Sort(ch);
            string keyStr = new string(ch);
            if(!map.ContainsKey(keyStr)){
                map[keyStr] = new List<string>();
            }
            map[keyStr].Add(s);
        }
        return new List<IList<string>>(map.Values);
    }
}
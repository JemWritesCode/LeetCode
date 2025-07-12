// #region 1 -- July 12 2025
/**
 * @param {string} s
 * @return {number}
 */

// Time Complexity: O(n) where n is the number of characters in the string. we must visit each character to scan the array for the longest substring.
// Space Complexity: O(1) because the problem description mentions the string contains only english letters, digits, symbols, and spaces the Set will never contain more than the number of those existing characters. So 26 letters + 10 digits + however many symbols is the limit instead of the length of the string.
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0,
    max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
};

// #endregion

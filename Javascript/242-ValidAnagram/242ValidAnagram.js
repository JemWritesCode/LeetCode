/* Frequency Array

Time Complexity: O(n) (Analyze Complexity Confirmed)
We have to go through up to the length of the entire string.

Space Complexity O(1) (Analyze Complexity Confirmed)
The only extra space is an array of size 26. Removing the constant this becomes O(1)

*/
////////////////////////////////////////
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let frequencyCounter = new Array(26).fill(0);
  let offset = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    frequencyCounter[s.charCodeAt(i) - offset]++;
    frequencyCounter[t.charCodeAt(i) - offset]--;
  }
  return frequencyCounter.every((count) => count === 0);
};

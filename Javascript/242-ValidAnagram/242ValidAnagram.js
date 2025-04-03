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
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (const charIndex in s){
        freq[s.charCodeAt(charIndex) - 97]++;
        freq[t.charCodeAt(charIndex) - 97]--;
    }
    return freq.every(count => count === 0);
};
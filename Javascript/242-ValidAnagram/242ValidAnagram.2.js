// Time complexity O(n) where n is the length of s. gotta visit every letter of s at least.
// Space complexity O(1) we're just traversing the strings. we have an array of 26 but that's set size.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // frequency count the letters, everything should 0 out if they're even
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char)-97]++;
        freq[t.charCodeAt(char)-97]--;
    }
    return freq.every(count => count === 0);
};
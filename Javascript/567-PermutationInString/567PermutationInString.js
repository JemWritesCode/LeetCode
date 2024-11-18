/* Sliding Window
Time Complexity: O(n)
have go go through the string to count frequency
(a little unsure about explanation)

Space Complexity: O(1)
While you do need arrays to hold the counters, they are always size 26 no matter the size of the inputs.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) 
        if (s1Count[i] === s2Count[i]) matches++;
        
    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
        if (matches === 26) return true;

        let index = s2.charCodeAt(r) - 97;
        s2Count[index]++;
        if (s1Count[index] === s2Count[index])
            matches++;
        else if (s1Count[index] + 1 === s2Count[index])
            matches--;

        index = s2.charCodeAt(l) - 97;
        s2Count[index]--;
        if (s1Count[index] === s2Count[index]) 
            matches++;
        else if (s1Count[index] - 1 === s2Count[index])
            matches--;
        l++;
    }
    return matches === 26;
};
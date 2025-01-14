// #region 1/13/2025
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    const counter = new Array(26).fill(0);
    for (sChar in s){
        counter[s.charCodeAt(sChar)-97]++;
        counter[t.charCodeAt(sChar)-97]--;
    }
    return counter.every(count => count === 0);
};
// #endregion

// #region 1/5/2025
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char)-97]++;
        freq[t.charCodeAt(char)-97]--;
    }
    return freq.every(count => count === 0);
};
// #endregion

// #region 1/4/2025

var isAnagram = function(s, t){
    if (s.length != t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char)-97]++;
        freq[t.charCodeAt(char)-97]--;
    }
    return freq.every(count => count === 0);
}

// #endregion
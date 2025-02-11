// #region Feb 11 2025
// Time Complexity: O(n) where n is the number of chars in s. We have to go through the entire string s to count frequency of each letter.
// Space Complexity: O(1) no matter the size of s and t we just need the same 26 character array to hold the alphabet to count frequency of each letter. 
var isAnagram = function(s,t){
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char) - 97]++;
        freq[t.charCodeAt(char) - 97]++;
    }
    return freq.every(count => count === 0);
}

// #endregion 

// #region Feb 10 2025
// Time complexity: O(n) where n is the number of characters in s. we have to go through the entire string to count frequency of each letter.
// Space Complexity: O(1) we just need the array of 26 letters for the alphabet.

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char)-97]++;
        freq[t.charCodeAt(char)-97]--;
    }
    return freq.every(count => count === 0);
}

// #endregion

// #region Feb 8 2025
// Time complexity: O(n) where n is the number of characters in s. we have to go through the entire string to count frequency of each letter.
// Space Complexity: O(1) we just need the array of 26 letters for the alphabet.

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char)-97]++;
        freq[t.charCodeAt(char)-97]--;
    }
    return freq.every(count => count === 0);
}

// #endregion

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
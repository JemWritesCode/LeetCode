// #region 16 -- April 3 2025
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in either the s or t string. We must traverse the entire length of a string to count the frequency of each letter of the alphabet.
// Space Complexity: O(1) no matter the size of the strings that are passed in we just need the same array of 26 characters for the alphabet. 
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (const charIndex in s){
        freq[s.charCodeAt(charIndex) - 97]++;
        freq[t.charCodeAt(charIndex) - 97]--;
    }
    return freq.every(count => count === 0);
};

// #endregion 

// #region 15 -- March 28 2025
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of characters in the s or t string. We must go through the entire string to count the frequency of each letter of the alphabet.
 // Space Complexity: O(1) No matter the size of the strings passed in the only memory we need to allocate is the fixed size frequency array to count the frequency of each letter of the alphabet. 
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (const charIndex in s){
        freq[s.charCodeAt(charIndex) - 97]++;
        freq[t.charCodeAt(charIndex) - 97]--;
    }
    return freq.every(count => count === 0);
};

// #endregion

// #region 14 -- March 2 2025
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Time Complexity: O(n) where n is the number of elements in the s string. We must traverse the entire string to count the frequency of each letter of the alphabet.
// Space Complexity: O(1) Because no matter the size of the passed in strings we still just need the 26 size array to count the frequency of each letter of the alphabet.
var isAnagram = function(s, t){
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char) - 97]++;
        freq[t.charCodeAt(char) - 97]--;
    }
    return freq.every(count => count === 0);
}

// #endregion 

// #region 13 -- Feb 25 2025
// Time Complexity: O(n) where n is the number of characters in one of the strings. We must traverse the entire string to count the frequency of characters.
 // Space Complexity: O(1) no matter the size of the strings we still just need the array of size 26 to count the letters of the alphabet. 
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char) -97]++;
        freq[t.charCodeAt(char) -97]--;
    }
    return freq.every(count => count === 0);
};

// #endregion 

// #region 12 -- Feb 18 2025
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 // Time Complexity: O(n) where n is the number of chars in one of the strings. We must traverse the entire string to count the occurrence of each letter of the alphabet.
 // Space Complexity: O(1) because no matter the size of the strings that are passed in we still just have the same size frequency array to count the occurrences of each letter of the alphabet.  
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (const char in s){
        freq[s.charCodeAt(char) -97]--;
        freq[t.charCodeAt(char) -97]++;
    }
    return freq.every(count => count === 0);
};

// #endregion 

// #region 11 -- Feb 17 2025
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of characters in one of the strings. We must traverse the entire string to count the number of letters of the alphabet using the freq array.
 // Space Complexity: O(1) no matter the size of the passed in strings we still just need the same set size 26 length frequency array to count the occurances of each letter of the alphabet. 
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (const char in s){
        freq[s.charCodeAt(char) -97]++;
        freq[t.charCodeAt(char) -97]--;
    }
    return freq.every(count => count === 0);
};

// #endregion 

// #region 10 -- Feb 16 2025
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in one of the strings. we have to traverse the entire string to count the frequency of letters
 // Space Complexity: O(1) because no matter the size of the strings passed in we just have the same 26 length frequency array
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (const char in s){
        freq[s.charCodeAt(char) - 97]--;
        freq[t.charCodeAt(char) - 97]++;
    }
    return freq.every(count => count === 0);
};

// #endregion 

// #region 9 -- Feb 15 2025
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the length of one of the strings. We must traverse the entire string to count the frequency of each letter of the alphabet.
 // Space Complexity: O(1) No matter the size of the input strings we just need the 26 length freq array to count them. 
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char) -97]++;
        freq[t.charCodeAt(char) -97]--;
    }
    return freq.every(count => count === 0);
};

// #endregion 

// #region 8 -- Feb 13 2025
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 // Time complexity: O(n) where n is the number of elements in one of the strings. we traverse the entire string to count the frequency of every letter of the alphabet with the freq array.
 // Space Complexity: O(1). No matter the size of the strings we still just need the same 26 length array to count the number of letters of the alphabet used in each string. 
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char)-97]++;
        freq[t.charCodeAt(char)-97]--;
    }
    return freq.every(count => count === 0);
};

// #endregion

// #region 7 -- Feb 12 2025
// Time  Complexity: O(n) where n is the number of characters in one of the strings. We must traverse the entire string to count the number of each letter of the alphabet in freq.
// Space Complexity: O(1) no matter the size of the strings passed in we just need the 26 length array to count the frequency of every letter of the alphabet. 
var isAnagram = function(s, t){
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (char in s){
        freq[s.charCodeAt(char)-97]++;
        freq[t.charCodeAt(char)-97]--;
    }
    return freq.every(count => count === 0);
}

// #endregion 

// #region 6 -- Feb 11 2025
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

// #region 5 -- Feb 10 2025
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

// #region 4 -- Feb 8 2025
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

// #region 3 -- 1/13/2025
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

// #region 2 -- 1/5/2025
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

// #region 1 -- 1/4/2025

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
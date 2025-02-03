// #region Feb 2 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // time: o(n)
 // space: o(n)
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion

// #region Feb 1 2025
/**
 * @param {string} s
 * @return {boolean}
 */
 // Time Complexity: O(n) Where n is the number of chars in s. All of the functions we call on it are O(n) so it's O(5n) but we drop the constant for O(n).
 // Space Complexity: O(n) where n is the number of chars in s. In the worst case the s string is all alphanumeric characters so we must store all of them in cleanStr.
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};
// #endregion

// #region Jan 31 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time complexity: O(n) where n is the number of chars in string s. Because we must visit every character in the string.
 // Space Complexity: O(n) because in the worst case s is all alphanumeric then cleanStr will be the same length as s. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion 

// #region Jan 30 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) gotta visit every char in s. 5n drop constants n
 // Space complexity: O(n) cleanstr has to hold all of s if every char is alphanumeric 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion 

// #region Jan 29 2025

/**
 * @param {string} s
 * @return {boolean}
 */
 // Time complexity: O(n) where n is the number of chars in string s. we have to visit every char of s. I actually think it's 5 times. toLowerCase, replace, split, reverse, join are all O(n). So O(5n) but drop constant to get O(n)
 // Space Complexity: O(n) - where n is the number of characters in string s. cleanStr in worst case will hold the same amount of characters as s. Worst case is everything in  s is already alphanumeric 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion

// #region Jan 28 2025
/**
 * @param {string} s
 * @return {boolean}
 */
 // Time complexity: O(n) we have to go through every char in the string. we also have to do this for split, reverse and join. O(4n) and then we drop the constants so O(n)
 // Space Complexity: O(n) because the cleanStr in worst case where every char is alphanumeric will hold ever char of s. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};
// #endregion

// #region Jan 27 2025
/**
 * @param {string} s
 * @return {boolean}
 */
 // Time complexity: O(n) must visit every character of the string to clean it. also O(n) operations for split, reverse, and join. O(4n) remove the constants and simplifies to O(n)
 // Space Complexity: O(n). Because cleanStr will have to hold up to every single character of the string in the worst case where every character is alphanumeric. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion

// #region Jan 26 2025
/**
 * @param {string} s
 * @return {boolean}
 */
 // Time Complexity: O(n). Cleaning the string is O(n). split, reverse, and join are also O(n) operations so you get O(4n). We generally drop constants for Big-O so it's O(n).
 // Space Complexity: O(n) because cleanStr will have to hold up to every char of s if it's already all alphanumeric. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};
// #endregion

// #region Jan 26 2025
// got rid of the i flag for ignore case. we can just make it lowercase before we run regex replace on it.

/**
 * @param {string} s
 * @return {boolean}
 */
 // Time Complexity: O(n) We must visit every character of the passed in string. split reverse and join must also go through the string and those are O(n) but even when it's O(4n) it still gets simplified to O(n)
 // Space Complexity: O(n) since cleanStr has to hold up to all of the letters of s
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};
// #endregion

// #region Jan 16 2025
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion
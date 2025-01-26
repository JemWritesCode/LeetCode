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
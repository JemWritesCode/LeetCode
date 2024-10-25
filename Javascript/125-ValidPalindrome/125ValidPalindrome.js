/*
Time Complexity: O(n)
Must go through the entire string to clean it up and make it lower case.

Space Compexlity: O(n)
need to store the cleaned string in a new variable the same size as the initial string
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
};
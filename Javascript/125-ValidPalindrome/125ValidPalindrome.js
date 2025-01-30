// There are two approaches for this. 
// Reverse the string
// Two pointers. 
// Obviously two pointers is longer but it's probably given as a solution because it's an easy introduction to two pointers.
// so I should come up with a javascript implementation for that to make sure I have it


/* REVERSE STRING
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
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #region 26 -- Aug 1 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of characters in s
 // Space Complexity: O(n) where n is the number of characters in s
var isPalindrome = function(s) {
    let cleanStr = s.toLowerCase().replace(/[^0-9a-z]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
};

//#endregion

// #region 25 -- May 20 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is equal to the number of characters in the s string. We have to traverse the string 5 times with toLowerCase, replace, split, reverse, and join giving us O(5n) however when talking asymptotic notation we drop the constant so we get O(n)
 // Space Complexity: O(n) where n is equal to the number of characters in the s string. In the worst case scenario s is already all alphanumeric characters so cleanStr becomes a copy of s. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion

// #region 24 -- May 14 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of elements in the s string. We must traverse the entire string 5 times with toLowerCase, replace, split, reverse, and join which is O(5n). However when talking asymtotpic notation we drop the constants so we get O(n)
 // Space Complexity: O(n) where n is the number of elements in the s string. In the worst case scenario s is already all lowercase alphanumeric characters so cleanStr just becomes a copy of s. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion 

// #region 23 -- May 9 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of characters in the s string. We must complete 5 different O(n) operations: toLowerCase, replace, split, reverse, and join for O(5n) but we drop constants in asymptotic notation so it becomes O(n).
 // Space Complexity: O(n) where n is the number of characters in the s string. In the worst case scenario s is already lowercase alphanumeric so cleanStr becomes a copy of s.
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion

// #region 22 -- April 27 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of characters in the s string. We have to perform 5 different O(n) functions on the string: toLowerCase, replace, split, reverse, and join which would give us O(5n). However we drop constants when talking big O so it becomes O(n). 
 // Space Complexity: O(n) where n is the number of characters in the s string. In the worst case scenario s is already all alphanumeric characters so cleanStr will be the same size. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion

// #region 21 -- March 29 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of characters in s. toLowerCase, replace, split, reverse, and join are all O(n) operations, which gives us O(5n). But when talking asymptotic notation we drop constants so it becomes O(n). 
 // Space Complexity: O(n) where n is the number of characters in s. In the worst case scenario s is already all alphanumeric characters so cleanStr will have the same amount of characters in it. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion 

// #region 20 -- Feb 26 2025
/**
 * @param {string} s
 * @return {boolean}
 */
 // Time Complexity: O(n) where n is the number of characters in the s string. We must traverse the entire string 5 times with toLowerCase, replace, split, reverse, and join. This gives us O(5n). We generally drop the constants when talking about BigO so it becomes O(n). 
 // Space Complexity: O(n) where n is the number of characters in the s string. In the worst case scenario all of the characters in s are already alphanumeric so cleanStr just becomes a copy of s. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion 

// #region 19 -- Feb 18 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of chars in string s. We have to call 5 O(n) operations with toLowerCase, replace, split, reverse, and join which gives us O(5n). But when talking BigO we generally drop the constants so we get O(n). 
 // Space Complexity: O(n) where n is the number of chars in string s. In the worst case scenario s is already all alphanumeric characters so cleanStr becomes a copy of s.
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};
// #endregion 

// #region 18 -- Feb 17 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of characters in the s string. We are calling 5 O(n) operations on it with toLowerCase, replace, split, reverse, and join which gives us O(5n). But we generally drop the constants when talking Big O so it becomes O(n). 
// Space Complexity: O(n) where n is the number of characters in the s string. In the worst case scenario s is already all alphanumeric characters so cleanStr just becomes a copy of s. 
var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion 

// #region 17 -- Feb 16 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of chars in the string s. We are doing 5 O(n) operations with toLowercase, replace, split, reverse, and join. This gives us O(5n). But we drop constants when we are talking about BigO notation so it becomes O(n).
 // Space Complexity: O(n) where n is the number of chars in the string s. In the worst case scenario the s string is already all alphanumeric characters so cleanStr is just a copy of s. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion

// #region 16 -- Feb 15 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of chars in the s string. We're calling 5 different operations with O(n) runtime (toLowerCase, replace, split, reverse, join) which gives us O(5n). When talking about BigO notation we drop the constants so we just get O(n).
 // Space Complexity: O(n) where n is the number of chars in the s string. In the worst case scenario the s string is already all alphanumeric so cleanStr just becomes a copy of the string. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion
 --
// #region 15 -- Feb 11 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of chars in the s string. every operation we call on the string is an O(n) operation so it's really O(5n) because of toLowerCase, replace, split, reverse, and join. But we generally drop constants when talking BigO so it becomes O(n).
 // Space Complexity: O(n) where n is the number of chars in the s string. Because in the worst case the s string is already all alphanumeric so cleanStr becomes a copy of s. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};
// #endregion
 --
// #region 14 -- Feb 9 2025
/**
 * @param {string} s
 * @return {boolean}
 */
 // Time Complexity: O(n) where n is the number of chars in s. Each operation we call on the string is O(n), which gives us O(5n) but when talking big o notation we drop the constants. So this becomes O(n).
 // Space Complexity: O(n) where n is the number of chars in s. In the worst case scenario all of the chars are already alphanumeric so cleanStr becomes a copy of s.
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion
 --
// #region 13 -- Feb 8 2025
/**
 * @param {string} s
 * @return {boolean}
 */
 // clean up the string and reverse it.
 // Time Complexity: O(n) where n is the number of chars in s. Because toLowerCase, replace, split, reverse, and join are all O(n) operations it's O(5n). We drop the constants when working with Big O notation so it becomes O(n)
 // Space Complexity: O(n) where n is the number of chars in s. In the worst case everything in the string is already alphanumeric so cleanStr just becomes a copy of s.
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};
// #endregion
 --
// #region 12 -- Feb 7 2025
/**
 * @param {string} s
 * @return {boolean}
 */
 //Time Complexity: o(n) where n is the number of chars in s. because all the functions we call on s are O(n) operations so it's O(5n) reduces to O(n)
 // Space Complexity: O(n) because in worst case the whole string is alphanumeric and cleanStr is just a copy of s.
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion
 --
// #region 11 -- Feb 6 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time complexity: O(n) where n is equal to the number of characters in the string. we actually traverse the whole string 5 times for toLowerCase, replace, split, reverse, and join. For Big O we drop the constants so O(5n) becomes O(n)
 //  Space Complexity: O(n) where in is equal to the number of characters in the string. Because in the worst case secnario the entire s string is alphaNumeric so we must hold the entire string in the cleanStr variable. 
 var isPalindrome = function(s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};
// #endregion 
 --
// #region 10 -- Feb 2 2025
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

// #region 9 -- Feb 1 2025
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
 --
// #region 8 -- Jan 31 2025
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
 --
// #region 7 -- Jan 30 2025
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
 --
// #region 6 -- Jan 29 2025

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
 --
// #region 5 -- Jan 28 2025
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
 --
// #region 4 -- Jan 27 2025
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
 --
// #region 3 -- Jan 26 2025
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
 --
// #region 2 -- Jan 26 2025
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
 --
// #region 1 -- Jan 16 2025
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
};

// #endregion
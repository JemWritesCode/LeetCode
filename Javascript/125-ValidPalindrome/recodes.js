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
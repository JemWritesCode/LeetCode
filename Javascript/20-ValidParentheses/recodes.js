// #region 10 -- July 29 2025
/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in the s string. We must visit every character in the string to ensure there are matching parentheses.
// Space Complexity: O(n) where n is the number of characters in the string. In the worst case scenario all of the characters in the string are opening parentheses and the stack becomes the same size as the string.
var isValid = function (s) {
  const bracketMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

// #endregion

// #region 9 -- July 27 2025
/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in the s string. We must go through each character in order to check for opening and closing.
// Space Complexity: O(n) where n is the number of characters in the s string. In the worst case all of the characters in the s string are opening brackets so we end up with a stack equal to the size of s full of their corrosponding closing brackets.
var isValid = function (s) {
  const bracketMap = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

// #endregion

// #region 8 -- May 22 2025

var isValid = function (s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

// #endregion

// #region 7 -- May 11 2025
/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in the s string. We must traverse the entire string to add it to the stack.
// Space Complexity: O(n) where n is the number of characters in the s string. In the worst case all of the characters are opening brackets so they all end up in the stack.
var isValid = function (s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0; // if everything opened closed there should be nothing left in a valid string
};

// #endregion

// #region 6 -- March 30 2025
/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in s. We have to traverse the entire string and push each character to the stack.
// Space Complexity: O(n) where n is the number of characters in s. In the worst case scenario we have a string of all opening brackets so they all get copied over to the stack.

var isValid = function (s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

// #endregion

// #region 5 -- Feb 18 2025

/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in s. We have to traverse the entire string and push each character to the stack.
// Space Complexity: O(n) where n is the number of characters in s. In the worst case scenario we have a string of all opening brackets so they all get copied over to the stack.
var isValid = function (s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

// #endregion

// #region 4 -- Feb 17 2025
/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in s. You must traverse the entire string and put it inot the stack.
// Space Complexity: O(n) where n is the number of characters in s. In the worst case all of the characters are opening brackets so they all end up in the stack.
var isValid = function (s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

// #endregion
// #region 3 -- Feb 16 2025
/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in s. You must traverse the entire string and put it into the stack.
// Space Complexity: O(n) where n is the number of characters in s. In the worst case all characters are opening brackets so they all end up in the stack.

isValid = function (s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

// #endregion

// #region 2 -- Feb 15 2025
/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in s. You must traverse the entire string and put it into the stack.
// Space Complexity: O(n) where n is the number of characters in s. In the worst case all characters are opening brackets so they all end up in the stack.
var isValid = function (s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

// #endregion

// #region 1 -- Feb 11 2025
/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity: O(n) where n is the number of characters in s. You must traverse the entire string and put it into the stack.
// Space Complexity: O(n) where n is the number of characters in s. In the worst case all characters are opening brackets so they all end up in the stack.
var isValid = function (s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let c of s) {
    if (bracketMap[c]) stack.push(bracketMap[c]);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
};

// #endregion

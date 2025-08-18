// #region 2 -- Aug 17 2025 -- I get the base concept and all of the implementation code wise now too. Not quite memorized yet though.
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.map((s) => `${s.length}#${s}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let j = str.indexOf("#", i);
      let length = parseInt(str.slice(i, j), 10);
      i = j + 1;
      result.push(str.slice(i, i + length));
      i += length;
    }
    return result;
  }
}

//#end region

// #region 1 -- Aug 16 2025 -- I get the base concept.
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.map((s) => `${s.length}#${s}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let j = str.indexOf("#", i);
      let length = parseInt(str.slice(i, j), 10);
      i = j + 1;
      result.push(str.slice(i, i + length));
      i += length;
    }
    return result;
  }
}

//#endregion

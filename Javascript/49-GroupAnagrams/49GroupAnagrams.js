/* Frequency Counting
Time: O(n x k) We aren't sorting we're just counting.
Space(n x k)
*/
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const s of strs) {
    const count = new Array(26).fill(0);
    for (const ch of s) count[ch.charCodeAt(0) - 97]++;
    const key = count.join("#");

    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return [...map.values()];
};

/* Sorting.
Sort every word and put into a hash map.
Sorting each word is O(k log k), times n number of input arrays

Time: O(m x n log n)
Space: O(m x n)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return [...map.values()];
};

/* Hash Set One Line Solution 
Make a set which can only hold unique values and compare the size of it to the length of nums 

Time Complexity: O(n) 
you have to go through the entire nums array to add it to the set

Space Complexity: O(n)
We need to make a set that has to hold up to n elements from the nums array.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size != nums.length;
};

////////////////////////////////////////////////////////
// Hash Set v2 -- exit early if a duplicate is found
// still O(n) but best case scenario runtime is Omega(1)

var containsDuplicate = function (nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

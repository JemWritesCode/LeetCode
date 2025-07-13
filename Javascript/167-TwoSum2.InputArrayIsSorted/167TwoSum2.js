/* Two Pointers
Time Complexity: O(n)
With two pointers you only have to go over the array once starting at the ends. 
the pointers never cross.

Space Complexity: O(1)
we're just going over the numbers array given to us
same amount of pointers no matter the size of the array
*/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let total = numbers[left] + numbers[right];
    if (total === target) return [left + 1, right + 1];
    else if (total > target) right--;
    else left++;
  }
  throw new Error("No solution found for twoSum");
};

// #region Jan 14 2025
// in a real world scenario it'd be a problem that this doesn't have a return when it doesn't hit target
// not all paths have a return basically.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0,
        right = numbers.length - 1;
    while (left < right){
        let total = numbers[left] + numbers[right];
        if (total === target)
            return [left + 1, right + 1];
        else if (total > target) right--;
        else left++;
    }
};

// #endregion
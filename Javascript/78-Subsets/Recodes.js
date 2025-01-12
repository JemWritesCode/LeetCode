// #region Jan 11 2025
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var subsets = [[]];
    for (num of nums){
        let sublength = subsets.length;
        for (let i = 0; i < sublength; i++){
            let currentCombo = subsets[i].concat(num);
            subsets.push(currentCombo);
        }
    }
    return subsets;
};
// #endregion
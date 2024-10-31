/*
Time Complexity: O(2^n)
For each element n in the nums array we can either add it or not add it

Space Complexity: O(2^n)
we have to store each 2^n subsets in the subsets array. 
each of these are sub arrays so it's really O(n * 2^n)
but we only take the dominant terms for Big O notation

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var subsets = [[]];
    for (var num of nums) {
        let subLength = subsets.length;
        for (let i = 0; i < subLength; i++) {
            let currentCombo = subsets[i].concat(num);
            subsets.push(currentCombo);
        }
    }
    return subsets;
};
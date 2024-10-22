/* Bucket Sort
Probably come back and refine this a bit. maybe make FreqMap smaller reverse keyval

Time Complexity: O(n)

Space Complexity: O(n)

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];

    for (let num of nums){
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    for (let [num, freq] of freqMap){
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    for (let i = bucket.length - 1; i >= 0; i--){
        if (bucket[i]) result.push(...bucket[i]);
        if (result.length === k) break;
    }
    return result;
};
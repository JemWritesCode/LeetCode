// #region 1 -- May 20 2025
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 // Time Complexity O(n)
 // Space Complexity O(n)
 var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];

    for (let num of nums){
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    for (let[num, freq] of freqMap){
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    for (let i = bucket.length - 1; i >= 0; i--){
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};

// #endregion
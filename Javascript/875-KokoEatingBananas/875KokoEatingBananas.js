/* Binary Search
* Time Complexity: O(log(max(piles)) * n)
*   You get a range of 1-biggest pile of bananas. that will be the range that gets binary searched to be k.
*   then for each of the eatingSpeed(k) you have to go through every pile and calculate time.
* Space Complexity: O(1)
*   We have a set amount of variables no matter the input size and are just iterating over the passed in piles.
*/ 
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;
    while (left <= right){
        const eatingSpeed = Math.floor((left + right) / 2);
        let totalTime = 0;
        for (const pile of piles)
            totalTime += Math.ceil(pile / eatingSpeed);
        if (totalTime <= h){
            result = eatingSpeed;
            right = eatingSpeed - 1;
        } else {
            left = eatingSpeed + 1;
        }
    }
    return result;
};
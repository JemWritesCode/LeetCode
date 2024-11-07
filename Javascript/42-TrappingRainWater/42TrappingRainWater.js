/*
* Time Complexity: O(n)
*   We have to go over every elment in the height array.
* Space Complexity: O(1)
*   We have the same number of variables no matter the size of the array. 
*   We are just traversing the height array passed in.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0,
        right = height.length - 1,
        leftMax = height[left],
        rightMax = height[right],
        water = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }
    return water;    
};
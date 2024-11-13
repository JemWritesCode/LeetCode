/* Binary Search
* Time Complexity: O(logr + logc)
* you can binary search via the rows, and then binary search through the columns. 
* this is better than treating it as one big list because that would be O(m log n)
*
* Space Complexity: O(1)
* Just iterating over the passed in matrix. row and c only vars no matter size of input.
*****************************
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let row = 0; row < matrix.length; row++) {
        for (let c = 0; c < matrix[row].length; c++) {
            if (matrix[row][c] == target) {
                return true;
            }
        }
    }
    return false;
} 

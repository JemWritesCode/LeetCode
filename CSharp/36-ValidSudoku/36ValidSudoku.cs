// HASH SET
// Time Complexity: O(1) - Fixed Table Size
// Space Complexity: O(1) - Using a fixed number of Hash Sets
public class Solution {
    public bool IsValidSudoku(char[][] board) {
        var rows = new HashSet<char>[9];
        var cols = new HashSet<char>[9];
        var squares = new HashSet<char>[9];

        for (int i = 0; i < 9; i++){
            rows[i] = new HashSet<char>();
            cols[i] = new HashSet<char>();
            squares[i] = new HashSet<char>();
        }

        for (int i = 0; i < 9; i++){
            for (int j = 0; j < 9; j++){
                char currentValue = board[i][j];
                
                if (currentValue != '.'){
                    // Hash Sets do not allow duplicates so if it fails to add 
                    // it's because a number is repeated.
                    if (!rows[i].Add(currentValue)) return false;
                    if (!cols[i].Add(currentValue)) return false;
                    int squareIndex = (i/3) * 3 + (j/3);
                    if (!squares[squareIndex].Add(currentValue)) return false;
                }
            }
        }
        return true;
    }
}
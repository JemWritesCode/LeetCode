/* Set- Check for duplicates in a row, a column, and then also the 3x3. 

Time Complexity: O(1)
although we have to go through every element in the sudoku board
it is always a 9x9 constant size. O(9^2) simplifies to O(1)

Space Complexity: O(1)
we have to store a copy in Set, but that will also be constant because it will always just be 9x9 board. 

*/ 

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const set = new Set();
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            const cell = board[i][j];
            if (cell === '.') continue;
            const boxNum = 3 * Math.floor(i/3) + Math.floor(j/3);
            const row = `row: ${i}, value ${cell}`;
            const col = `col: ${j}, value ${cell}`;
            const box = `box: ${boxNum}, value ${cell}`;
            if(set.has(row) || set.has(col) || set.has(box))
                return false;
            set.add(row);
            set.add(col);
            set.add(box);
        }
    }
    return true;
};
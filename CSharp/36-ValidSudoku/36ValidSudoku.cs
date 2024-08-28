// Go through each row to make sure unique numbers
// Go through each column to make sure unique numbers
// Go through each of the 3 x 9 squares to make sure it's unique numbers

// Probably need to make sure it's numerical input as well (this is a problem constraint already)
// Probably need to make sure the array we receive in the first place is in fact a 9x9 grid (correct size) (this is a problem constraint already)

// for each row it's like board[i][k]. i is going to be the row# and i will be the column number. So we want to go through all like board[0][k]
// and check for 1-9 without repetition. 

// To do the same for the columns it's basically board[i][0]. So we'll iterate through i to go "down" the column while k is kept the same

// the 3x3 square is a bit trickier. We sort of did something like this in harvard cs50 for the filters but idk if that's the approach to take here. 
// I'd want
/*
board[0][0]
board[0][1]
board[0][2]
board[1][0]
board[1][1]
board[1][2]
board[2][0]
board[2][1]
board[2][2]


i guess just check 3 rows and 3 columns at a time basically. then go next. looping through those rows and columns

*/

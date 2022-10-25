const isValidRowColumn = (board) => {
    let sudoku = true;

    for (let i = 0; i < 9 && sudoku; i++) {
        const rowElements = {};
        const columnElements = {};
        for (let j = 0; j < 9 && sudoku; j++) {
            const rowElem = board[i][j];
            const columnElem = board[j][i];
            if (rowElem !== '.') {
                if (rowElements[rowElem]) {
                    sudoku = false;
                } else {
                    rowElements[rowElem] = rowElem;
                }
            }

            if (sudoku && columnElem !== '.') {
                if (columnElements[columnElem]) {
                    sudoku = false;
                } else {
                    columnElements[columnElem] = columnElem;
                }
            }
        }
    }

    return sudoku;
};

const isValidSquares = (board) => {
    let sudoku = true;

    for (let i = 0; i < 9 && sudoku; i = i + 3) {
        for (let j = 0; j < 9 && sudoku; j = j + 3) {
            const squareElements = {};
            const sqElem = {};
            sqElem[0] = board[i][j];
            sqElem[1] = board[i][j + 1];
            sqElem[2] = board[i][j + 2];
            sqElem[3] = board[i + 1][j];
            sqElem[4] = board[i + 1][j + 1];
            sqElem[5] = board[i + 1][j + 2];
            sqElem[6] = board[i + 2][j];
            sqElem[7] = board[i + 2][j + 1];
            sqElem[8] = board[i + 2][j + 2];

            for (let k = 0; k < 9 && sudoku; k++) {
                if (sqElem[k] !== '.') {
                    if (squareElements[sqElem[k]]) {
                        sudoku = false;
                    } else {
                        squareElements[sqElem[k]] = sqElem[k];
                    }
                }
            }
        }
    }

    return sudoku;
};

var isValidSudoku = function (board) {
    let result = false;

    result = isValidRowColumn(board);

    if (result) {
        result = isValidSquares(board);
    }

    return result;
};

const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(board));

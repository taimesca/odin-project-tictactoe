const TicTacToe = (function() {

    let player1, player2, turn, winner;

    let board = [['','',''], ['','',''], ['','','']];

    const newGame = function(player1Name, player2Name) {
        player1 = player1Name;
        player2 = player2Name;
        turn = 1;
        board = [['','',''], ['','',''], ['','','']];
        winner="";
    }

    const playTurn = function(row, col) {
        if (winner) {
            return { won: true, valid: false, error: 'The game is over. Start a new game.' };
        }

        if (board[row][col] !== '') {
            return { won: false, valid: false, error: 'The cell is not empty. Choose an empty cell.' };
        }

        let playChar = turn === 1 ? 'X' : 'O';
        board[row][col] = playChar;
        if (won(playChar)) {
            winner = turn === 1 ? player1 : player2;
            return { won: true };
        }
        turn = turn === 1 ? 2 : 1;
        return { won: false };
    }

    const won = function(char) {
        // Check rows
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] === char && board[i][1] === char && board[i][2] === char)
                return true;
        }

        // Check columns
        for (let i = 0; i < board.length; i++) {
            if (board[0][i] === char && board[1][i] === char && board[2][i] === char)
                return true;
        }

        // Check backslash diagonal
        if (board[0][0] === char && board[1][1] === char && board[2][2] === char)
            return true;

        // Check forward slash diagonal
        if (board[0][2] === char && board [1][1] === char && board[2][0] === char)
            return true;

        // If you're still here, nobody's won
        return false;
    };

    const getBoard = function() {
        return JSON.parse(JSON.stringify(board));
    }

    const whoseTurn = function() {
        return turn === 1 ? player1 : player2;
    }

    const getWinner = function() {
        return winner;
    }

    return { newGame, playTurn, getBoard, whoseTurn, getWinner };
})();

export default TicTacToe;
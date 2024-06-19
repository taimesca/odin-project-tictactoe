import TicTacToe from "./lib/TicTacToe.js";
import Board from "./lib/components/Board.js";
import NewGameDialog from "./lib/components/NewGameDialog.js";
import WinDialog from "./lib/components/WinDialog.js";

const app = (function() {
    const root = document.getElementById('app-root');
    const portal = document.getElementById('portal')

    root.innerHTML = `
        <header><h1>Tic Tac Toe</h1></header>
        <div id="turn">&nbsp;</div>
        <div id="error">&nbsp;</div>`;
    root.appendChild(Board(TicTacToe.getBoard()));

    portal.appendChild(NewGameDialog());
    portal.appendChild(WinDialog());

    const startGame = function() {
        let player1 = document.getElementById('input-player1-name').value;
        let player2 = document.getElementById('input-player2-name').value;

        TicTacToe.newGame(player1, player2);
        updateBoard((TicTacToe.getBoard()));
    }

    const tryMove = function(cell) {
        const play = TicTacToe.playTurn(cell.dataset.row, cell.dataset.col);

        if (play.valid === false) {
            invalidMove(play.error);
            return;
        }
        
        if (play.won === true) {
            declareWinner(TicTacToe.getWinner());
        }

        updateBoard(TicTacToe.getBoard());
    }

    const updateBoard = function(boardArray) {
        document.getElementById('turn').innerText = `${TicTacToe.whoseTurn()}'s turn`;
        document.getElementById('board').replaceWith(Board(boardArray));
    }

    const declareWinner = function(winner) {
        document.getElementById('winner').innerText = winner;
        document.getElementById('dialog-winner').show();
    }

    const newGame = function() {
        document.getElementById('dialog-winner').close();
        document.getElementById('input-player1-name').value = '';
        document.getElementById('input-player2-name').value = '';
        document.getElementById('dialog-new-game').show();
    }

    const invalidMove = function(error) {
        document.getElementById('error').innerText = error;
    }
    
    return { newGame, startGame, tryMove }
})();

document.getElementById('button-start-game').addEventListener('click', app.startGame);
document.getElementById('button-new-game').addEventListener('click', app.newGame);
document.addEventListener('click', (ev) => { 
    if (ev.target.className === 'col') {
        app.tryMove(ev.target);
    }
});

app.newGame();

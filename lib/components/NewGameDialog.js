const NewGameDialog = function() {
    const elem = document.createElement('dialog');
    elem.id = 'dialog-new-game';
    elem.innerHTML = `
        <article>
            <header>
                <p><strong>Start a new game of Tic Tac Toe</strong></p>
            </header>
            <p>
                <form id="form-new-game">
                    <label for="input-player1-name">Player <strong>X</strong></label>
                    <input id="input-player1-name" type="text" placeholder="Enter name" required>

                    <label for="input-player2-name">Player <strong>O</strong></label>
                    <input id="input-player2-name" type-"text" placeholder="Enter name" required>

                    <button formmethod="dialog" id="button-start-game">Start Game</button>
                </form>
            </p>
        </article>
    `;

    return elem;
};

export default NewGameDialog;
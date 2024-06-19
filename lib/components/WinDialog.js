const WinDialog = function() {
    const elem = document.createElement('dialog');
    elem.id = 'dialog-winner';
    elem.innerHTML = `
        <article>
            <header>
                <p><strong>Congratulations!</strong></p>
            </header>
            <p>
                <h2><span id="winner"></span> wins!</h2>
            </p>
            <br>
            <p>
                <button id="button-new-game">New Game</button>
            </p>
        </article>
    `;

    return elem;
};

export default WinDialog;
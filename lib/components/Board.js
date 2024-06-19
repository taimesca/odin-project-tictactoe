const Board = function(boardArray) {
    const elem = document.createElement('table');
    elem.id = 'board';
    elem.innerHTML = boardArray.map((row, rowIndex) => `
    <tbody>
        <tr class="row">
        ${row.map((col, colIndex) => `<td class="col" data-row="${rowIndex}" data-col="${colIndex}">${col}</td>`).join('')}
        </tr>
    </tbody>`).join('');

    return elem;
};

export default Board;
export const UI = {
    game: null,
    control: {
        board: null,
        template: null,
        status: null,
        size: 5,
    },
    init: (domControl, game) => {
        UI.control.board = document.getElementById(domControl.board);
        UI.control.template = document.getElementById(domControl.template);
        UI.control.status = document.getElementById(domControl.status);
    },
    setEvent: (domControl) => {
        document.getElementById(domControl.btnShot[0]).addEventListener('click', () => {
            domControl.btnShot[1]();
        });
    },
    start(game) {
        UI.game = game;
        UI.control.status.textContent = "Juego iniciado";
        UI.makeBoard(UI.control.size);
    },
    changeStatus(newStatus) {
        UI.control.status.textContent = newStatus;
    },
    makeBoard(total) {
        UI.control.board.style.gridTemplateColumns = `repeat(${total}, 1fr)`;

        Array.from({ length: total * total }, (_, i) => {
            const clon = UI.control.template.content.cloneNode(true);
            const cell = clon.querySelector('.cell')
            cell.textContent = ` ${(i % total)}, ${Math.floor(i / total)}`;
            cell.dataset.fila = Math.floor(i / total);
            cell.dataset.columna = i % total;
            UI.control.board.appendChild(clon);
        });
    }
}
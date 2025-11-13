import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";

UI.init({
    board: 'gameBoard',
    template: 'cell-template',
    status: 'gameStatus',
});




const gameInstance = new GameSubmarine(UI);

UI.start(gameInstance);


gameInstance.init(Math.floor(Math.random() * 5), Math.floor(Math.random() * 5));


UI.setEvent({
    btnShot: ['btnShot', ()=> gameInstance.shot()]
});


/* Esto es otra forma, cuidado con la perdida del contexto this.
/*
UI.setEvent({
    btnShot: ['btnShot', gameInstance.shot.bind(gameInstance)]
});
*/


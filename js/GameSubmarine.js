import { Submarino } from "./Submarino.js";

export class GameSubmarine {
    constructor(UIControl) {
        this.UIControl = UIControl;
        this.UIControl.start(this);
        this.submarino = null;
    }

    init(x, y) {
        this.submarino = new Submarino();
        this.submarino.init(x, y);
    }
    
    shot() {
        // Lógica para manejar el disparo en el juego de submarinos
        // Actualizo interfaz
        const shot = prompt("Ingrese la posición a la que quiere disparar (Ej: 2, 5)").replace(" ", "").split(",");
        let x = +shot[0];
        let y = +shot[1];
        console.log("Disparo")

        if ( x === this.submarino.x && y === this.submarino.y ) {
        this.UIControl.changeStatus("¡Has hundido el submarino!");
        
        } else {
        this.UIControl.changeStatus("¡Fallaste, intenta otra vez!");
        this.submarino.move(this.UIControl.control.size);
        
        }   
    }
    

}
class Submarino {
    constructor() {
        this.x = 0;
        this.y = 0;

        console.log("El submarino se ha creado");
    }

    init(x, y) {
        this.x = x;
        this.y = y;
        console.log("El submarino esta en la casilla", x, y);
    }

    move(size) {
        this.x = Math.floor(Math.random() * size ) ;
        this.y = Math.floor(Math.random() * size );

        console.log("El submarino se ha movido a la posición: ", this.x, this.y);
    }
}

export{Submarino}

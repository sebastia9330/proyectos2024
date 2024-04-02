const zonaJuego = document.getElementById("zonaJuego");

class Paleta{

    element;

    constructor(){
        this.element = document.createElement("div");
        this.element.classList = "paleta";
        zonaJuego.appendChild(this.element);
    }
}

const J1 = new Paleta();
const J2 = new Paleta();
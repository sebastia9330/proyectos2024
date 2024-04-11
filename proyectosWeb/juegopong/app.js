const zonaJuego = document.getElementById("zonaJuego");
let bola;
const mensajeElement = document.getElementById("mensaje");
const instruccionesElement = document.getElementById("instrucciones");
estadoJuego = "PAUSE";

class Paleta{

    element;
    y = 0;
    velocidad = 5;
    movimiento;
    alto = 200;
    ancho = 20

    constructor(){
        this.element = document.createElement("div");
        this.element.classList = "paleta";
        zonaJuego.children[0].appendChild(this.element);
        this.resetPosicion();
    }

    subir(){
        if(!this.movimiento){
            this.movimiento = setInterval(()=>{
                this.y -= this.velocidad;
                if(this.y < 0){
                    this.y = 0;
                    this.freeze()
                }
                this.element.style.top = this.y+"px";
            }, 20)
        }
    }

    bajar(){
        if(!this.movimiento){
            this.movimiento = setInterval(()=>{
                this.y += this.velocidad;
                const limite = document.body.clientHeight - this.alto;
                if(this.y > limite){
                    this.y = limite;
                    this.freeze()
                }
                this.element.style.top = this.y+"px";
            }, 20)
        }
    }

    freeze(){
        clearInterval(this.movimiento)
        this.movimiento = undefined;
    }

    resetPosicion(){
        this.y = document.body.clientHeight/2 - this.alto/2;
        this.element.style.top = this.y + "px";
    }
}

class Bola{
    x;
    y;
    dx = -10;
    dy = 0;
    movimiento;
    ancho = 30;

    constructor(){
        this.element = document.createElement("div");
        this.element.classList = "bola";
        zonaJuego.appendChild(this.element);
        this.resetPosicion();
        this.mover();
        mensajeElement.classList.toggle("escondido",true);
        instruccionesElement.classList.toggle("escondido",true);
    }

    resetPosicion(){
        this.x = (document.body.clientWidth/2) - this.ancho;
        this.element.style.left = this.x + "px";
        this.y = (document.body.clientHeight/2) - this.ancho;
        this.element.style.top = this.y + "px";
    }

    mover(){
        if(!this.movimiento){
            this.movimiento = setInterval(()=>{
                //Movimiento Horizontal
                this.x += this.dx;

                //choque con paletas
                //paleta J1
                if(this.x < 0 + J1.ancho &&
                    this.y + this.ancho/2 > J1.y &&
                    this.y + this.ancho/2 < J1.y + J1.alto){
                        this.dy += this.obtenerVariacionY(J1)
                        this.dx = this.dx* -1
                }

                //Paleta J2
                if(this.x + this.ancho > document.body.clientWidth - J2.ancho &&
                    this.y + this.ancho/2 > J2.y &&
                    this.y + this.ancho/2 < J2.y + J2.alto){
                        this.dy += this.obtenerVariacionY(J2)
                        this.dx = this.dx* -1
                }

                //meter Punto
                if(this.x < 0 || this.x > document.body.clientWidth - this.ancho){
                    //console.log("punto") 
                    tablero.sumar(this.x < 100 ? 2 : 1);
                }
                this.element.style.left = this.x+"px";


                if(this.x < 0 || this.x > document.body.clientWidth - this.ancho){
                    this.dx = this.dx *-1
                }
                this.element.style.left = this.x + "px";
                //Movimiento Vertical
                this.y += this.dy;
                if(this.y < 0 || this.y > document.body.clientHeight - this.ancho){
                    this.dy = this.dy *-1
                }
                this.element.style.top = this.y + "px";
            }, 20)
        }
    }

    eliminar(){
        clearInterval(this.movimiento);
        zonaJuego.removeChild(this.element)
        bola = undefined;
    }

    obtenerVariacionY(j){
        const diferencia =  (this.y + this.ancho/2) - (j.y + j.alto/2);
        return diferencia / 10;
    }
}

class Tablero{
    j1Score = 0;
    j2Score = 0;
    puntajeMaximo = 2;

    constructor(){
        this.element = document.createElement("p");
        this.element.id = "tablero";
        zonaJuego.appendChild(this.element);
        this.actualizarTexto()
    }

    actualizarTexto(){
        this.element.textContent = this.j1Score + " - " + this.j2Score;
    }

    sumar(p){
        if(p === 1) this.j1Score++
        else this.j2Score++
        this.actualizarTexto()
        bola.eliminar();
        J1.resetPosicion();
        J2.resetPosicion();
        mensajeElement.textContent = 'presiona "espacio" para continuar';
        mensajeElement.classList.toggle("escondido",false);
        this.estadoJuego = "PAUSE"
        if(this.j1Score >= this.puntajeMaximo){
            this.ganar(1)
        }
        else if(this.j2Score >= this.puntajeMaximo){
            this.ganar(2)
        }
    }

    ganar(p){
        mensajeElement.textContent = 'Gano el jugador #: ' + p;
        mensajeElement.classList.toggle("titilar",true);
        estadoJuego = "END"
    }

    reset(){
        this.j1Score = 0;
        this.j2Score = 0;
        this.actualizarTexto();
        mensajeElement.classList.toggle("titilar",false);
    }
}

document.addEventListener("keydown",(e)=>{
    switch(e.key){
        case "w":
            J1.subir();
            break;
        case "s":
            J1.bajar();
            break
        case "ArrowUp":
            J2.subir();
            break;
        case "ArrowDown":
            J2.bajar();
            break;
        case " ":
            if(!bola) bola = new Bola();
            if(estadoJuego === "END") tablero.reset()
            estadoJuego = "PLAY";
            break;
    }
})


document.addEventListener("keyup",(e)=>{
    switch(e.key){
        case "w":
        case "s":
            J1.freeze();
            break
        case "ArrowUp":
        case "ArrowDown":
            J2.freeze();
            break;
    }
})

const J1 = new Paleta();
const J2 = new Paleta();
const tablero = new Tablero();
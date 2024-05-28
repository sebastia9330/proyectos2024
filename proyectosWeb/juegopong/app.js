const zonaJuego = document.getElementById("zonaJuego");

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
        zonaJuego.appendChild(this.element);
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
}

class Bola{
    x;
    y;
    dx = -10;
    dy = -10;
    movimiento;
    ancho = 30;

    constructor(){
        this.element = document.createElement("div");
        this.element.classList = "bola";
        zonaJuego.appendChild(this.element);
        this.resetPosicion();
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
                        this.dx = this.dx* -1
                }

                //Paleta J2
                if(this.x + this.ancho > document.body.clientWidth - J2.ancho &&
                    this.y + this.ancho/2 > J2.y &&
                    this.y + this.ancho/2 < J2.y + J2.alto){
                    this.dx = this.dx* -1
                }

                //meter Punto
                if(this.x < 0 || this.x > document.body.clientWidth - this.ancho){
                    console.log("punto") 
                    this.eliminar();
                }


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
    }
}

class Tablero{

    constructor(){
        this.element = document.createElement("p");
        this.element.id = "tablero";
        zonaJuego.appendChild(this.element);
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
const bola = new Bola();
const tablero = new Tablero();
const zonaJuego = document.getElementById("zonaJuego");

class Paleta{

    element;
    y = 0;
    velocidad = 5;
    movimiento;
    alto = 200;

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
    constructor(){
        this.element = document.createElement("div");
        this.element.classList = "bola";
        zonaJuego.appendChild(this.element);
    }
}

document.addEventListener("keydown",(e)=>{
    console.log(e)
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
    console.log(e)
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
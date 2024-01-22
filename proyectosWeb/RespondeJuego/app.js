//Referencias
const icono = document.getElementById("icono");
const tooltip = document.getElementById("tooltip");
const fraseElement = document.getElementById("frase");

//variables
let fraseSecreta = "Por favor me gustaria que me respondas";
let respuestaSecreta = "";
let estadoTruco = false;


//tooltip
icono.addEventListener("mouseenter", () =>{
    tooltip.classList.toggle("escondido",false)
});


icono.addEventListener("mouseleave", () =>{
    tooltip.classList.toggle("escondido",true)
});

fraseElement.addEventListener("input",(e)=>
    {//console.log(e.data)
        if(e.data === "-"){
            estadoTruco = !estadoTruco
            escribirLetraCorrecta()
        };
        if(estadoTruco){
            respuestaSecreta += e.data;
            escribirLetraCorrecta();
            console.log(respuestaSecreta)
        }
        fraseElement.classList.toggle("correcta", fraseElement.value === fraseSecreta)
    }
)

function escribirLetraCorrecta(){
    const letraAAgregar = fraseSecreta[fraseElement.value.length-1];
    if(letraAAgregar === undefined) return estadoTruco=false;
    fraseElement.value = fraseElement.value.substring(0,fraseElement.value.length-1 )+letraAAgregar;
}
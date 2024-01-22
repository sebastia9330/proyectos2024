//Referencias
const icono = document.getElementById("icono");
const tooltip = document.getElementById("tooltip");
const fraseElement = document.getElementById("frase");
const preguntaElement = document.getElementById("pregunta");
const respuestaElement = document.getElementById("respuesta");
const preguntarBoton = document.getElementById("preguntar");
const reiniciarBoton = document.getElementById("reiniciar");


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

preguntarBoton.addEventListener("click",()=>{
    if(fraseElement.value === ""){
        return respuestaElement.innerText = "No puedo responder a una pregunta vacia";
    }else if(fraseElement.value === fraseSecreta && respuestaSecreta !== "" && preguntaElement.value.length > 5){
        respuestaElement.innerText = respuestaSecreta;
    }else{
        respuestaElement.innerText = "Algo no esta bien, preferiria no responder esa pregunta";
    }
})

reiniciarBoton.addEventListener("click",()=>{
    preguntaElement.value = "";
    fraseElement.value = "";
    respuestaSecreta = "";
    estadoTruco = false;
    respuestaElement.innerText = "Hazme una Pregunta"
})

preguntaElement.focus();
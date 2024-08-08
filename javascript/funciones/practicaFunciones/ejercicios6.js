//Crea un botón que cuando se presione, reste un valor específico al número actual. 
//Este valor debe ser definido por el usuario mediante un prompt.

//numero actual
let numero = 20
const pantalla = document.createElement("p");
pantalla.textContent = numero;
document.body.appendChild(pantalla)

//actualizar numero
function actualizarNumero(){
    pantalla.textContent = numero;
}

//creamos el boton
function botones(operacion){
    const boton = document.createElement("button");
    boton.textContent = operacion;
    document.body.appendChild(boton);
    return boton;
}

const botonQuitar = botones("Restar");

//tomamos el dato del numero a restar
let enviado = parseInt(prompt("Ingrese un valor a restar:"));

//funcion anonima
const restando = function(){
    numero -= enviado
    actualizarNumero()
}   

//asignamos la funcion al boton
botonQuitar.addEventListener("click",restando);
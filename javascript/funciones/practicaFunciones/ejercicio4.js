//Agrega un input de tipo número y un botón que permita establecer el valor de numero al valor ingresado en el input. 
//Asegúrate de actualizar la pantalla y la consola.

//creamos el numero que se va a modificar
let numero = 20
const pantalla = document.createElement("p");
pantalla.textContent = numero;
document.body.appendChild(pantalla)

//actualizar numero
function actualizarNumero(){
    pantalla.textContent = numero;
}

//creamos el input
const input = document.createElement("input");
input.type = "number"
document.body.appendChild(input)

//creamos el boton
function botones(operacion){
    const boton = document.createElement("button");
    boton.textContent = operacion;
    document.body.appendChild(boton);
    return boton;
}

const botonModificar = botones("modificar")

//creamos dentro del boton la funcion para modificar
botonModificar.addEventListener("click",() =>{
    numero = parseInt(input.value)
    actualizarNumero()
})

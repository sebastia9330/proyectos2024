//Crea una lista en HTML y una función que añada elementos a esta lista. Cada vez que se presione un botón, 
//agrega el valor actual de numero a la lista.

let numero = 20
const pantalla = document.createElement("p");
pantalla.textContent = numero;
document.body.appendChild(pantalla)

//creamos una lista
const lista = document.createElement("ul")
document.body.appendChild(lista)

//elementos que van dentro de la lista
function agregarElementos(){
    const element = document.createElement("li")
    element.textContent = numero
    lista.appendChild(element)
}

//creamos el boton
function botones(operacion){
    const boton = document.createElement("button");
    boton.textContent = operacion;
    document.body.appendChild(boton);
    return boton;
}

const botonAgregar = botones("Agregar")

//asignamos la funcion al boton
botonAgregar.addEventListener("click",agregarElementos)
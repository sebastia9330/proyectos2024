//Crea un botón que, cuando se presione, desactive los botones de multiplicar y dividir, y otro botón que los reactive.

//traemos el codigo de crear dos botones de multiplicar y dividir
//creamos el numero y lo mostramos en pantalla
let numero = 10
const pantalla = document.createElement("p");
pantalla.textContent = numero;
document.body.appendChild(pantalla)

//actualizar numero
function actualizarNumero(){
    pantalla.textContent = numero;
}

//creamos la funcion para los botones
function botones(operacion){
    const boton = document.createElement("button");
    boton.textContent = operacion;
    document.body.appendChild(boton);
    return boton;
}

//llamamos la funcion para crear los botones
const botonMultiplicar = botones("*");
const botonDividir = botones("/");

//funciones para multiplicar y dividid
function multiplicarDos(){
    numero *= 2;
    actualizarNumero();
}

function dividirDos(){
    numero /= 2;
    actualizarNumero();
}

//asignamos las funciones a los botones
botonMultiplicar.addEventListener("click",multiplicarDos);
botonDividir.addEventListener("click",dividirDos);

//ahora creamos los botones de activar y desactivar
const botonActivar = botones("ACTIVAR")
const botonDesactivar = botones("DESACTIVAR")

function desactivar(){
    botonMultiplicar.disabled = true;
    botonDividir.disabled = true;
}

function activar(){
    botonMultiplicar.disabled = false;
    botonDividir.disabled = false;
}

botonActivar.addEventListener("click",activar)
botonDesactivar.addEventListener("click",desactivar)
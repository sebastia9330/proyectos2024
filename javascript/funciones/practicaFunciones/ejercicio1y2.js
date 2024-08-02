//crear dos botones que multipliquen y dividan el numero por dos

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

//ejercicio2 crear un boton que formatee el numero
//creamos un boton reset
const botonReset = botones("Reset");

//creamos una funcion para restablecer
function reset(){
    numero = 10;
    actualizarNumero()
}

//asignamos la funcion actualizar numero para el boton reset
botonReset.addEventListener("click",reset)

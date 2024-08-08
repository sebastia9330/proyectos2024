//Crea una función que cambie el estilo (color, tamaño de fuente, etc.) del elemento que muestra el número. 
//Añade botones para aplicar diferentes estilos.

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

function cambiarEstilo(color, tamañoFuente) {
    pantalla.style.color = color;
    pantalla.style.fontSize = tamañoFuente;
}

const botonCambiarEstilo = botones("Cambiar Estilo");

botonCambiarEstilo.addEventListener("click", () => {
    cambiarEstilo("red", "200px");
});

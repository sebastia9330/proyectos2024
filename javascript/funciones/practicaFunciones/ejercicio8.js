//Crea una función flecha que acepte dos parámetros y devuelva la suma de ambos. 
//Usa esta función en un evento de botón para mostrar el resultado en la consola.

//creamos la funcion flecha
const dosParametros = (a,b) =>a + b;

//creamos la funcion para los botones
function botones(operacion){
    const boton = document.createElement("button");
    boton.textContent = operacion;
    document.body.appendChild(boton);
    return boton;
}

//creamos el boton
const botonSumaConsola = botones("Suma dos numero en la consola")


botonSumaConsola.addEventListener("click",()=>{
    const resultado = dosParametros(7,8)
    console.log(resultado);
})
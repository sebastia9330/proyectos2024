//Crea una función que reciba dos números y una operación (como "sumar", "restar", "multiplicar", "dividir") 
//y devuelva el resultado de la operación correspondiente. Usa esta función en un evento de botón.

//creamos la funcion, en caso de que la funcion no nesecite return no utilizamos corchetes, en este caso necesitamos
//retornar varias operacion, asi que utilizamos corchetes
const calculadora = (c,d,operacion) =>{
    switch(operacion){
        case "sumar":
            return c+d;
        case "restar":
            return c-d;
        case "multiplicar":
            return c*d;
        case "dividir":
            return c/d;
        default:
            return null;
    }
}

//creamos la funcion para los botones
function botones(operacion){
    const boton = document.createElement("button");
    boton.textContent = operacion;
    document.body.appendChild(boton);
    return boton;
}

const botonCalculadora = botones("Calcular operacion")

botonCalculadora.addEventListener("click",() =>{
    console.log(calculadora(4,5,"restar"))
})
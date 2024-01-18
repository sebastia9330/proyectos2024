//Referencias
const botonesNumeros = Array.from(document.getElementsByClassName("numero"));
const botonesOperaciones = Array.from(document.getElementsByClassName("operacion"));
const pantallaElement = document.getElementById("pantalla");
const indicadorOperacion = document.getElementById("indicadorOperacion");

//variables
let numeroAnterior;
let numeroReinicia = false;

//eventos
botonesNumeros.forEach(boton => boton.addEventListener("click",(e) =>numeroClickeado(e.target.textContent)));
botonesOperaciones.forEach(boton => boton.addEventListener("click",(e) =>operacionClickeada(e.target.textContent)));

//funciones
function numeroClickeado(numero){
    //console.log(numero)
    if(numeroReinicia){
        pantallaElement.textContent = parseFloat(numero);
    }else{
        pantallaElement.textContent = parseFloat(pantallaElement.textContent + numero);
    }
}

function operacionClickeada(operacion){
    if(!numeroAnterior){
        if(pantallaElement.textContent == 0) return;
        numeroAnterior = parseFloat(pantallaElement.textContent);
        //pantallaElement.textContent = 0;
    }else{
        let resultado;
        switch(indicadorOperacion.textContent){
            case "+":
                resultado = numeroAnterior + parseFloat(pantallaElement.textContent);
            break
            case "-":
                resultado = numeroAnterior - parseFloat(pantallaElement.textContent);
            break
            case "*":
                resultado = numeroAnterior * parseFloat(pantallaElement.textContent);
            break
            case "/":
                if(pantallaElement.textContent === "0"){
                    resultado = 0
                    break
                }
                resultado = numeroAnterior / parseFloat(pantallaElement.textContent);
            break
        }
        pantallaElement.textContent = resultado;
        numeroAnterior = resultado;
    }
    numeroReinicia = true;
    indicadorOperacion.textContent = operacion;
    console.log(operacion , numeroAnterior);
}


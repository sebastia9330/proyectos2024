//Referencias
const botonesNumeros = Array.from(document.getElementsByClassName("numero"));
const botonesOperaciones = Array.from(document.getElementsByClassName("operacion"));
const pantallaElement = document.getElementById("pantalla");
const indicadorOperacion = document.getElementById("indicadorOperacion");

//variables
let numeroAnterior;
let numeroReinicia = false;

//eventos
botonesNumeros.forEach((boton) => {boton.addEventListener("click",(e) =>numeroClickeado(parseFloat(e.target.textContent)))});
botonesOperaciones.forEach((boton) => {boton.addEventListener("click",(e) =>operacionClickeada(e.target.textContent))});
document.getElementById("punto").addEventListener("click",punto);
document.getElementById("clear").addEventListener("click",clear);
document.getElementById("allClear").addEventListener("click",allClear);
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            numeroClickeado(parseInt(e.key));
        break;
        case "+":
        case "-":
        case "*":
        case "/":
            operacionClickeada(e.key);
        break;
        case "Enter":
            operacionClickeada("=");
        break;
        case "Escape":
            allClear()
        break;
        case "Backscape":
            clear()
        break;
        case ".":
            punto()
        break;
    }
});

//funciones
function numeroClickeado(numero){
    //console.log(numero)
    if(numeroReinicia){
        pantallaElement.textContent = parseFloat(numero);
        numeroReinicia = false;
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

function punto(){
    if(Number.isInteger(parseFloat(pantallaElement.textContent))){
        pantallaElement.textContent += "."
    }
}

function clear(){
    pantallaElement.textContent = 0;
}

function allClear(){
    clear();
    numeroAnterior = undefined;
    indicadorOperacion.textContent = undefined;
}

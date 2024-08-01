let numero = 10
const pantalla = document.createElement("p");
pantalla.textContent = numero;
document.body.appendChild(pantalla);

//funciones basicas
function actualizarNumero(){
    pantalla.textContent = numero;
    console.log("Ahora el numero es ", numero )
}

//funciones con parametros
function agregarBoton(texto){
    const boton = document.createElement("button");
    boton.textContent = texto;
    document.body.appendChild(boton)
}

agregarBoton("enviar");
agregarBoton("cancelar");

//funciones con return
function triplicar(numero){
    return numero * 3
}

const tripleDeCinco = triplicar(5);
console.log(tripleDeCinco);

function agregarBotonConReturn(nombre){
    const boton = document.createElement("button");
    boton.textContent = nombre;
    document.body.appendChild(boton)
    return boton;
}

const botonSumar = agregarBotonConReturn("+");
const botonRestar = agregarBotonConReturn("-");

//funciones anonimas
//son las que llevan primero el nombre de la funcion guardado dentro de un aconstante
const restarDos = function(restando){
    return restando - 10
}

console.log(restarDos(20))

//funciones flecha
let sumando = 9;
const sumarTres = () => sumando+=3; //usamos funcion flecha para resumir el codigo, en la funcion flecha ya esta explicito el return
const sumarCuatro = (sumario) =>{
    return sumario += 4
};

console.log(sumando = sumarCuatro(sumando))
console.log(sumarTres(sumando))


//funciones como argumentos
function sumarUno(){
    numero++;
    actualizarNumero()
}
botonSumar.addEventListener("click",sumarUno)

botonRestar.addEventListener("click", ()=> {//con esto enlazamos la funcion al metodo pues solo se usaria en ese metodo
    numero--;
    actualizarNumero();
})
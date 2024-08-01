class Card {
    element;
    input;
    chipsContainer;

    constructor(nombre) {
        this.element = document.createElement("section");
        this.titulo = document.createElement("h2");
        this.titulo.innerText = nombre;
        // this.input = document.createElement("input");
        // this.input.type = "number";
        this.chipsContainer = document.createElement("div");
        this.chipsContainer.className = "chipsContainer";
        this.element.appendChild(this.titulo);
        // this.element.appendChild(this.input);
        this.element.appendChild(this.chipsContainer);
        document.body.appendChild(this.element);
    }

    /**
  * Crea un chip con el nombre recibido
  * @param {string} chips
  */
    crearChip(contenido = "") {
        const nuevoChip = document.createElement("span");
        nuevoChip.classList = "chip";
        nuevoChip.innerText = contenido;
        this.chipsContainer.appendChild(nuevoChip);
    }

    /**
   * Crea chips según el parámetro recibido 
   * @param {number | number[] | string | string[]} chips
   */
    set chips(chips) {
        this.reset();
        if (!Array.isArray(chips)) return this.crearChip(chips);
        chips.forEach(chip => this.crearChip(chip));
    }

    /** Borra todos los chips existentes */
    reset() {
        Array.from(this.chipsContainer.children).forEach(hijo => this.chipsContainer.removeChild(hijo))
    }
}

//lista a utilizar
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];


//objetos tarjetas
const forMayorCinco = new Card("For Mayor a 5");
const multiplosTres = new Card("For con multiplos de 3");
const mapCuadrado = new Card("Uso de map");
const filterPares = new Card("Filter para pares");
const filterImpares = new Card("Filter para Impares");
const reduceMultiplicado = new Card("Reduce la lista al multiplicarla");
const findMayorCinco = new Card("Muestra el primer numero mayor a 5 dentro de la lista");
const forEachIndicePar = new Card("Mostramos los numeros en indices pares");
const mapNumero = new Card("mostramos Numero como prefijo");
const filteryMap = new Card("pares por dos con filter y map");
const reduceIndicesImpares = new Card("Suma los numeros ubicados en los indices impares");




//uso del for con mayor a 5
for(let i = 0; i < list.length; i++){
    const element = list[i];
    if(element > 5 ){
        forMayorCinco.crearChip(element);
    }
}


//uso de for para encontrar los multiplos de 3
for(let i = 0;i < list.length; i++){
    const element = list[i]
    if(element % 3 === 0)
        multiplosTres.crearChip(element)
}

//uso de map para sacar cuadrados
mapCuadrado.chips = list.map(element => element * element)

//filter para sacar pares
filterPares.chips = list.filter(element => element % 2 === 0)

//filter para sacar impares
filterImpares.chips = list.filter(element => element % 2 !== 0)

//reduce para multiplicar todos
reduceMultiplicado.chips = list.reduce((acomulado,element) => acomulado * element, 1)

//con find encontramos el primer numero mayor a 5
findMayorCinco.chips = list.find(element => element > 5)

//con for each mostramos los numeros ubicados en indices pares
list.forEach((element,i) => {
    if(i % 2 === 0)forEachIndicePar.crearChip(element)
})

//con map mostramos los numero con un prefijo numero
mapNumero.chips = list.map(element => `Numero: ${element}`)

//usando filter y map sacamos los pares y luego los multiplicamos por dos
filteryMap.chips = list.filter(element => element % 2 === 0).map(element => element * 2)

//usando reduce, sumamos los numero que estan en indices impares
reduceIndicesImpares.crearChip(list.reduce((acomulado, element, i) =>{
    if(i % 2 !== 0){
        const total = acomulado + element
        return total
    }else{
        return element
    }
},0))
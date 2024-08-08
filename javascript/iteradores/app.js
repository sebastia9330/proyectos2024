/** Crea un elemento card el cual contiene chips */
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

//Lista a utilizar
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Objetos cards
const forLoopCard = new Card("for loop");
const forLoopreverso = new Card("For Reverso")
const forDosEnDosItem = new Card("For dos en dos items")
const forPares = new Card("for Pares")
const forEachCard = new Card("forEach");
const reduceCard = new Card("reduce");
const mapCard = new Card("map");
const filterCard = new Card("filter");
const findCard = new Card("find");

//Explicación loops

//For: es muy versatil por que podemos indicar cuantas veces queremos que se ejecute
//for de uno en uno
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    forLoopCard.crearChip(element)
}

//for reverso
for(let i = list.length-1; i >= 0; i --){
    const element = list[i];
    forLoopreverso.crearChip(element);
} 


//For para imprimir items de dos en dos
for (let i = 1; i < list.length; i += 2) {
    const element = list[i];
    forDosEnDosItem.crearChip(element)
}

//for para pares
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if(element % 2 === 0)forPares.crearChip(element)
}

// forEach sirve para ciclar en el array
list.forEach(element => {
    if (element % 2 === 0) forEachCard.crearChip(element)
});

// reduce
reduceCard.crearChip(list.reduce((acumulado, actual) => {
    return acumulado + actual;
}))
// reduce que solo suma números pares
reduceCard.crearChip(list.reduce((acumulado, actual) => {
    if (actual % 2 === 0) return acumulado + actual;
    return acumulado;
}, 0))

//map devuelve una transformacion 
mapCard.chips = list.map(element => element * 2)
//map Versión larga
mapCard.chips = list.map(element => {
    return element * 2;
})

//filter
filterCard.chips = list.filter(element => element % 2 === 0)
//filter versión larga
filterCard.chips = list.filter(element => {
    return element % 3 === 0
})

//find
findCard.chips = list.find(element => element % 2 === 0)
//Versión con crearChip
findCard.crearChip(list.find(element => element % 3 === 0));



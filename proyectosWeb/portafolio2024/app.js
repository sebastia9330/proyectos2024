const proyectosContainer = document.getElementById("tarjetasContainer");
const aside = document.getElementsByTagName("aside")[0];

const getTecnologias = (tecnologias) =>{
    let res = "";
    tecnologias.forEach(tecnologia => {
        res += `<span class="tecnologia">${tecnologia}</span>`
    })
    return res;
}

//Creación Proyectos
proyectos.forEach(proyecto =>{
    const nuevoProyecto = document.createElement("div");
    nuevoProyecto.classList = "tarjeta proyecto";
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML = `
        <img src="img/proyectos/${proyecto.imagen}">
        <div>
            <h3>${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>
            <p>Tecnologias: ${getTecnologias(proyecto.tecnologias)}</p>
        </div>
        <a href="${proyecto.link}" target="_blank">Ver Proyecto</a>
    `
    
})

//Creacion info personal
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList = "presentacion";
nuevaPresentacion.innerHTML = `
    <img src="${informacionPersonal.imagen}">
`;
informacionPersonal.otros.forEach(dato => {
    nuevaPresentacion.innerHTML += `
    <div>
        <span>${dato[0]}:</span>
        <span>${dato[1]}</span>
    </div>
    `
})
aside.appendChild(nuevaPresentacion);

//Idiomas
const nuevoIdioma = document.createElement("div");
nuevoIdioma.classList = "idioma";
informacionPersonal.idiomas.forEach(dato => {
    nuevoIdioma.innerHTML += `
    <div>
        <span>${dato[0]}:</span>
        <span>${dato[1]}</span>
    </div>
    `
})
aside.appendChild(nuevoIdioma);

//Lenguales de programacion
const nuevoLenguaje = document.createElement("div");
nuevoLenguaje.classList = "lenguaje";
informacionPersonal.tecnologias.forEach(dato => {
    nuevoLenguaje.innerHTML += `
    <div>
        <span>${dato[0]}</span>
        <span>${dato[1]}</span>
    </div>
    <progress max="10" value=${dato[1]}>
    `
})
aside.appendChild(nuevoLenguaje);

const getIconoRed = (red) =>{
    switch(red){
        case "github":
            return "github.svg";
        case "linkedin":
            return "linkedin.png"
    }
}


//Links
const nuevoRedes = document.createElement("div");
nuevoRedes.classList = "red";
informacionPersonal.redes.forEach(dato => {
    nuevoRedes.innerHTML += `
    <a href="${dato[1]}" target="_blank">
        <img src="img/iconos/${getIconoRed(dato[0])}">
    </a>
    `
})
aside.appendChild(nuevoRedes);


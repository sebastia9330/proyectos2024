//Referencias
const icono = document.getElementById("icono");
const tooltip = document.getElementById("tooltip");

//tooltip
icono.addEventListener("mouseenter", () =>{
    tooltip.classList.toggle("escondido",false)
});


icono.addEventListener("mouseleave", () =>{
    tooltip.classList.toggle("escondido",true)
});
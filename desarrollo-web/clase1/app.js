const invitacion = document.getElementById("invitacion");

invitacion.addEventListener("click",()=> alert("sigueme en github como https://github.com/sebastia9330"));

const toggleButton = document.getElementById("toggleTarjetas");
const tarjetas = document.querySelector(".tarjetas");

toggleButton.addEventListener("click", () =>{
    if(tarjetas.style.display === "none"){
        tarjetas.style.display = "flex";
    }else{
        tarjetas.style.display = "none";
    }
    console.log("hola")
});
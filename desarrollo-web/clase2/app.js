const boton = document.getElementById("cambiar")
const textos = document.getElementsByClassName("texto")

boton.addEventListener("click",()=>{
    for(let i = 0; i < textos.length; i++){
        textos[i].innerHTML = "me encantas Dilza"
        textos[i].style.color = "red" 
    }
})
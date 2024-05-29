document.getElementById('registro1').addEventListener('submit', async (e) =>{
    e.preventDefault();
    const formDatos = new FormData(e.target);
    const data = {
        nombre: formDatos.get('nombre'),
        genero: formDatos.get('genero'),
        autor: formDatos.get('autor')
    };

    try{
        const respuesta = await fetch('http://localhost:3000/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(respuesta.ok){
            alert("Libro registrado con éxito")
        }else{
            alert("Error de registro")
        }
    }catch(error){
        alert("Error en la conexión")
    }
});
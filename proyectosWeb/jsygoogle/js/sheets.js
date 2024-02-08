let turnos;

async function getTurnos(){
    let response;
    try {
        // Fetch first 10 files
        response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
            range: 'Class Data!A:F',
        });
    } catch (err) {
        console.error(err)
        //document.getElementById('content').innerText = err.message;
        return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
        console.warn("No se encontraron valores")
        //document.getElementById('content').innerText = 'No values found.';
        return;
    }
    turnos = [];
    range.values.forEach((fila) => {
        if(isNaN(parseInt(fila[0])) || fila[5] !== undefined) return;
        const nuevoTurno = {
            id: fila[0],
            cliente: fila[1],
            email: fila[2],
            modelo: fila[3],
            problema: fila[4],
            fecha_terminado: fila[5],
            comentario: fila[6],
        };
        turnos.push(nuevoTurno);        
    });
    //console.log(range.values)
    // Flatten to string to display
    /* const output = range.values.reduce(
        (str, row) => `${str}${row[0]}, ${row[4]}\n`,
        'Name, Major:\n');
    document.getElementById('content').innerText = output; */
}


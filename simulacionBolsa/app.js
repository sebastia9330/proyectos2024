document.getElementById("investmentForm").addEventListener('submit', addInvestment);

const apiKey = "8YGGSUX54WVFSQ6C";

function addInvestment(event){
    event.preventDefault();
    const symbol = document.getElementById("symbol").value.toUpperCase();
    const amount = parseFloat(document.getElementById("amount").value);

    //Llamada a la API para obtener el precio de la acción
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        //obtener el ultimo precio disponible
        const timeSeries = data['Time Series (1min)'];
        const lastTimesTamp = Object.keys(timeSeries)[0];
        const pricePerUnit = parseFloat(timeSeries[lastTimesTamp]['1. open']);
        const quantity = amount / pricePerUnit;
        const currentValue = quantity * pricePerUnit;

        //calculo de la ganacia/perdida (inicialmente sera 0)
        const gainLoss = 0;

        //Agregar la informacion a la tabla
        const table = document.getElementById('investmentTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `
                <td>${new Date().toLocaleDateString()}</td>
                <td>${symbol}</td>
                <td>$${pricePerUnit.toFixed(2)}</td>
                <td>${quantity.toFixed(4)}</td>
                <td>$${currentValue.toFixed(2)}</td>
                <td>${gainLoss.toFixed(2)}</td>
            `;

            //limpiar el formulario
            document.getElementById('investmentForm').reset();
    })
    .catch(error => console.error('Error al obtener los datos de la API:', error))
}
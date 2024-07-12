const alphaVantageApiKey = "8YGGSUX54WVFSQ6C";
const financialModelingPrepApiKey = "LiEX1TY4IKjSJ0fXBgzKC1vZPGMngEX9";


// Array para almacenar las inversiones
let investments = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("investmentForm").addEventListener('submit', addInvestment);

    // Llamar a la función de actualización cada 1 minuto
    setInterval(updateInvestments, 60000); // 60000 milisegundos = 1 minuto
});

function addInvestment(event) {
    event.preventDefault();
    const symbol = document.getElementById("symbol").value.toUpperCase();
    const amount = parseFloat(document.getElementById("amount").value);

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${alphaVantageApiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data['Time Series (1min)']) {
                const timeSeries = data['Time Series (1min)'];
                const lastTimestamp = Object.keys(timeSeries)[0];
                const pricePerUnit = parseFloat(timeSeries[lastTimestamp]['1. open']);
                const quantity = amount / pricePerUnit;
                const currentValue = quantity * pricePerUnit;
                const gainLoss = currentValue - amount;

                // Llamada a la API para obtener datos de dividendos
                fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${symbol}?apikey=${financialModelingPrepApiKey}`)
                    .then(response => response.json())
                    .then(dividendData => {
                        let dividendRate = 0;
                        let dividendDate = "--";
                        let dividendsObtained = 0;

                        if (dividendData['historical'] && dividendData['historical'].length > 0) {
                            const latestDividend = dividendData['historical'][0];
                            dividendRate = (latestDividend.dividend / pricePerUnit) * 100;
                            dividendDate = new Date(latestDividend.date).toLocaleDateString();
                            dividendsObtained = latestDividend.dividend * quantity;
                        }

                        // Guardar la inversión en el array
                        investments.push({
                            symbol: symbol,
                            pricePerUnit: pricePerUnit,
                            quantity: quantity,
                            currentValue: currentValue,
                            gainLoss: gainLoss,
                            dividendRate: dividendRate,
                            dividendDate: dividendDate,
                            dividendsObtained: dividendsObtained
                        });

                        // Actualizar la tabla
                        updateTable();
                    })
                    .catch(error => console.error('Error al obtener datos de dividendos:', error));
            } else {
                console.error('No se encontraron datos de la acción para el símbolo proporcionado.');
            }
        })
        .catch(error => console.error('Error al obtener los datos de la API de Alpha Vantage:', error));

    // Limpiar el formulario
    document.getElementById('investmentForm').reset();
}

function updateTable() {
    const tableBody = document.getElementById('investmentTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Limpiar la tabla antes de actualizar

    investments.forEach(investment => {
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${new Date().toLocaleDateString()}</td>
            <td>${investment.symbol}</td>
            <td>$${investment.pricePerUnit.toFixed(2)}</td>
            <td>${investment.quantity.toFixed(4)}</td>
            <td>$${investment.currentValue.toFixed(2)}</td>
            <td class="${investment.gainLoss >= 0 ? 'gain' : 'loss'}">$${investment.gainLoss.toFixed(2)}</td>
            <td>${investment.dividendRate.toFixed(2)}%</td>
            <td>${investment.dividendDate}</td>
            <td>$${investment.dividendsObtained.toFixed(2)}</td>
        `;
    });
}

function updateInvestments() {
    investments.forEach(investment => {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${investment.symbol}&interval=1min&apikey=${alphaVantageApiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data['Time Series (1min)']) {
                    const timeSeries = data['Time Series (1min)'];
                    const lastTimestamp = Object.keys(timeSeries)[0];
                    const pricePerUnit = parseFloat(timeSeries[lastTimestamp]['1. open']);
                    const quantity = investment.quantity;
                    const currentValue = quantity * pricePerUnit;
                    const gainLoss = currentValue - (investment.pricePerUnit * investment.quantity);

                    // Actualizar los datos de la inversión
                    investment.pricePerUnit = pricePerUnit;
                    investment.currentValue = currentValue;
                    investment.gainLoss = gainLoss;

                    // Actualizar la tabla
                    updateTable();
                } else {
                    console.error('No se encontraron datos de la acción para el símbolo proporcionado.');
                }
            })
            .catch(error => console.error('Error al obtener los datos de la API de Alpha Vantage:', error));
    });
}
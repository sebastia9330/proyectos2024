document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("investmentForm").addEventListener('submit', addInvestment);
});

const alphaVantageApiKey = "8YGGSUX54WVFSQ6C";
const financialModelingPrepApiKey = "LiEX1TY4IKjSJ0fXBgzKC1vZPGMngEX9";

function addInvestment(event) {
    event.preventDefault();
    const symbol = document.getElementById("symbol").value.toUpperCase();
    const amount = parseFloat(document.getElementById("amount").value);

    // Llamada a la API de Alpha Vantage para obtener el precio de la acción
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${alphaVantageApiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data['Time Series (1min)']) {
                const timeSeries = data['Time Series (1min)'];
                const lastTimestamp = Object.keys(timeSeries)[0];
                const pricePerUnit = parseFloat(timeSeries[lastTimestamp]['1. open']);
                const quantity = amount / pricePerUnit;
                const currentValue = quantity * pricePerUnit;

                // Calcular la ganancia/pérdida
                const gainLoss = currentValue - amount;

                // Llamada a la API de Financial Modeling Prep para obtener datos de dividendos
                return fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${symbol}?apikey=${financialModelingPrepApiKey}`)
                    .then(response => response.json())
                    .then(dividendData => {
                        if (dividendData['historical'] && dividendData['historical'].length > 0) {
                            const latestDividend = dividendData['historical'][0];
                            const dividendRate = (latestDividend.dividend / pricePerUnit) * 100;
                            const dividendDate = new Date(latestDividend.date).toLocaleDateString();
                            const dividendsObtained = latestDividend.dividend * quantity;

                            // Agregar la información a la tabla
                            const table = document.getElementById('investmentTable').getElementsByTagName('tbody')[0];
                            const newRow = table.insertRow();
                            newRow.innerHTML = `
                                <td>${new Date().toLocaleDateString()}</td>
                                <td>${symbol}</td>
                                <td>$${pricePerUnit.toFixed(2)}</td>
                                <td>${quantity.toFixed(4)}</td>
                                <td>$${currentValue.toFixed(2)}</td>
                                <td class="${gainLoss >= 0 ? 'gain' : 'loss'}">$${gainLoss.toFixed(2)}</td>
                                <td>${dividendRate.toFixed(2)}%</td>
                                <td>${dividendDate}</td>
                                <td>$${dividendsObtained.toFixed(2)}</td>
                            `;
                        } else {
                            console.error('No se encontraron datos de dividendos para la empresa proporcionada.');
                        }

                        // Limpiar el formulario
                        document.getElementById('investmentForm').reset();
                    });
            } else {
                console.error('No se encontraron datos de la acción para el símbolo proporcionado.');
            }
        })
        .catch(error => console.error('Error al obtener los datos de la API:', error));
}

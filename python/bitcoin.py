import pandas as pd
import matplotlib.pyplot as plt

# Datos proporcionados
data = {
    'FECHA': ["23/04/2024", "24/04/2024", "25/04/2024", "26/04/2024", "29/04/2024", "30/04/2024", "1/05/2024", "2/05/2024", 
              "3/05/2024", "6/05/2024", "7/05/2024", "8/05/2024", "9/05/2024", "10/05/2024", "13/05/2024", "14/05/2024", 
              "15/05/2024", "16/05/2024", "17/05/2024", "20/05/2024", "21/05/2024", "22/05/2024", "23/05/2024", "24/05/2024", 
              "25/05/2024", "26/05/2024", "27/05/2024", "28/05/2024", "29/05/2024", "30/05/2024", "31/05/2024", "1/06/2024", 
              "2/06/2024", "3/06/2024", "4/06/2024"],
    'PRECIO': [66429.00, 66651.00, 64247.00, 64262.00, 62651.00, 63665.00, 60239.00, 57733.00, 59715.00, 64047.00, 63488.00, 
               62410.00, 61611.00, 63035.00, 61620.00, 62663.00, 62058.00, 65932.00, 65932.00, 66742.00, 71061.00, 69820.39, 
               67894.80, 68270.30, 69162.50, 69068.90, 69906.40, 68284.70, 67458.90, 69144.50, 68269.22, 67839.77, 68409.16, 
               68500.16, 69306.85]
}

df = pd.DataFrame(data)
df['FECHA'] = pd.to_datetime(df['FECHA'], format='%d/%m/%Y')
df.set_index('FECHA', inplace=True)

# Cálculo de medias móviles
df['SMA_10'] = df['PRECIO'].rolling(window=10).mean()
df['SMA_20'] = df['PRECIO'].rolling(window=20).mean()

# Gráfico de precios y medias móviles
plt.figure(figsize=(12, 6))
plt.plot(df['PRECIO'], label='Precio')
plt.plot(df['SMA_10'], label='SMA 10 días', color='orange')
plt.plot(df['SMA_20'], label='SMA 20 días', color='red')
plt.title('Precio de Bitcoin y Medias Móviles')
plt.xlabel('Fecha')
plt.ylabel('Precio')
plt.legend()
plt.grid()
plt.show()

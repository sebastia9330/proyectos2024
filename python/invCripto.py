import pandas as pd

# Cargar datos desde un archivo Excel
archivo_excel = r'D:\memoria\Documentos\inversiones.xlsx'
nombre_hoja = 'InvCripto'

# Cargar la hoja específica del archivo Excel
data = pd.read_excel(archivo_excel, sheet_name=nombre_hoja)

# Consolidar datos
compras_btc = data.filter(regex='COMPRA\d+ BTC')
compras_eth = data.filter(regex='COMPRA\d+ ETH')
compras_io_net = data.filter(regex='COMPRA\d+ IO.NET')

# Depuración: Verificar qué columnas se seleccionaron
print("Columnas BTC:", compras_btc.columns)
print("Columnas ETH:", compras_eth.columns)
print("Columnas IO.NET:", compras_io_net.columns)

# Calcular promedios, sumas, etc.
data['BTC Promedio'] = compras_btc.mean(axis=1)
data['ETH Promedio'] = compras_eth.mean(axis=1)
data['IO.NET Promedio'] = compras_io_net.mean(axis=1)

# Eliminar filas con valores nulos
data_clean = data.dropna()

# Guardar el resultado consolidado en un nuevo archivo Excel
data_clean.to_excel('compras_consolidadas.xlsx', index=False)

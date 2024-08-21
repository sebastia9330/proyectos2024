""" #leer un archivo
# Abre el archivo en modo lectura ('r')
archivo = open('archivo.txt', 'r')

# Lee el contenido del archivo
contenido = archivo.read()
print(contenido)

# Cierra el archivo
archivo.close() """

""" #leer linea por linea
archivo = open('archivo.txt', 'r')

# Leer línea por línea
for linea in archivo:
    print(linea.strip())  # Elimina saltos de línea al final de cada línea

archivo.close() """

""" #escribir una nueva linea
archivo = open('archivo.txt', 'w')

# Escribir una línea en el archivo
archivo.write("Esta es una nueva línea de texto.\n")

# Cerrar el archivo
archivo.close()

archivo = open('archivo.txt', 'a')

# Agregar otra línea al archivo
archivo.write("Esta es una línea adicional.\n")

archivo.close()

#con with cerramos el archivo automaticamente
with open('archivo.txt', 'r') as archivo:
    contenido = archivo.read()
    print(contenido)

#usamos try y except para evitar errores
try:
    with open('archivo_que_no_existe.txt', 'r') as archivo:
        contenido = archivo.read()
        print(contenido)
except FileNotFoundError:
    print("El archivo no fue encontrado.") """

import csv

with open('datos_nuevos.csv', 'w', newline='') as archivo_csv:
    escritor_csv = csv.writer(archivo_csv)
    
    # Escribir la cabecera
    escritor_csv.writerow(['Nombre', 'Edad', 'Ciudad'])
    
    # Escribir datos
    escritor_csv.writerow(['Carlos', '30', 'Bogotá'])
    escritor_csv.writerow(['María', '25', 'Medellín'])

with open('datos_nuevos.csv', 'r') as archivo_csv:
    lector_csv = csv.reader(archivo_csv)
    for fila in lector_csv:
        print(fila)


# Leer un archivo CSV y copiarlo a otro archivo
with open('datos_nuevos.csv', 'r') as archivo_entrada:
    lector_csv = csv.reader(archivo_entrada)
    with open('copia_datos.csv', 'w', newline='') as archivo_salida:
        escritor_csv = csv.writer(archivo_salida)
        for fila in lector_csv:
            escritor_csv.writerow(fila)
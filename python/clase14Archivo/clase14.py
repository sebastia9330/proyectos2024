"""Clase 14: Python - Archivos (Lectura y Escritura)
Trabajar con archivos es una tarea esencial en la mayoría de los lenguajes de programación. Python facilita mucho la 
lectura y escritura de archivos con su conjunto de funciones integradas. Los tipos de archivos más comunes con los que 
trabajarás incluyen archivos de texto (como .txt) y archivos binarios.

1. Abrir Archivos
Para abrir un archivo en Python, utilizamos la función open(). El método acepta dos parámetros principales:

El nombre o la ruta del archivo.
El modo en el que se quiere abrir el archivo.
Modos de Apertura Comunes:

'r': Modo de lectura (read). El archivo debe existir.
'w': Modo de escritura (write). Si el archivo no existe, se crea. Si ya existe, se sobrescribe.
'a': Modo de agregar (append). Escribe datos al final del archivo sin sobrescribirlo.
'b': Modo binario (binary). Útil para archivos no de texto (imágenes, vídeos, etc.).
'+': Actualiza el archivo (lectura y escritura)."""


archivo = open("clase14.txt", "r")  # Abrir un archivo en modo lectura

"""Cierre de Archivos: Después de terminar con un archivo, es importante cerrarlo utilizando el método close(). 
Si no cierras el archivo, puedes perder datos o crear problemas de acceso."""
archivo.close()


"""2. Leer un Archivo
Cuando se abre un archivo en modo de lectura ('r'), puedes leer su contenido de varias maneras.

    1. Leer todo el archivo:

        - El método read() lee todo el contenido del archivo y lo devuelve como una cadena."""
archivo = open("clase14.txt", "r")
contenido = archivo.read()
print(contenido)
archivo.close()

"""2. Leer línea por línea:

        Puedes utilizar readline() para leer una línea a la vez o readlines() para obtener una lista de todas las líneas"""
archivo = open("clase14.txt", "r")
for linea in archivo:
    print(linea.strip())  # .strip() quita saltos de línea
archivo.close()

"""3. Usando un bloque with:

Una forma más segura de trabajar con archivos es utilizando el bloque with. Esto asegura que el archivo se cierre 
automáticamente al final del bloque, incluso si ocurre una excepción."""
with open("clase14.txt", "r") as archivo:
    contenido = archivo.read()
    print(contenido)
# El archivo se cierra automáticamente aquí

"""3. Escribir en un Archivo
Para escribir en un archivo, necesitas abrirlo en modo de escritura ('w') o agregar ('a'). Si el archivo no existe, 
Python lo creará.

    1.Escribir en modo sobrescritura ('w'):

    Este modo elimina todo el contenido existente en el archivo y escribe el nuevo contenido."""
with open("clase14.txt", "w") as archivo:
    archivo.write("Este es un nuevo contenido.")

"""
    2. Escribir en modo agregar ('a'):

    Este modo no borra el contenido existente, sino que agrega al final del archivo."""
with open("clase14.txt", "a") as archivo:
    archivo.write("\nEsta línea se agrega al final.")

"""
    Escribir múltiples líneas:

    Si deseas escribir varias líneas de una vez, puedes usar un bucle o el método writelines()."""
lineas = ["Primera línea\n", "Segunda línea\n", "Tercera línea\n"]
with open("clase14.txt", "w") as archivo:
    archivo.writelines(lineas)

"""4. Leer y Escribir Archivos Binarios
Los archivos binarios (como imágenes o archivos de vídeo) no pueden abrirse y manipularse como archivos de texto normales. 
Necesitas abrirlos en modo binario utilizando 'rb' (lectura binaria) o 'wb' (escritura binaria)."""
# Leer un archivo binario (como una imagen)
with open("python.jpg", "rb") as archivo:
    contenido_binario = archivo.read()
    print(contenido_binario)

# Escribir un archivo binario
with open("python_copia.jpg", "wb") as archivo_copia:
    archivo_copia.write(contenido_binario)

"""5. Manejando Errores al Trabajar con Archivos
Trabajar con archivos puede generar errores, como si el archivo no existe o si no tienes permisos para abrirlo. 
Utilizar el manejo de excepciones con try y except es una buena práctica para evitar que el programa falle."""
try:
    with open("archivo_no_existente.txt", "r") as archivo:
        contenido = archivo.read()
except FileNotFoundError:
    print("Error: El archivo no fue encontrado.")

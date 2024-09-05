try:
    archivo = open("tarea.txt","r")
    for linea in archivo:
        print(linea.strip())
    archivo.close()

    with open("tarea.txt","a") as archivo:
        archivo.write("\nEsta es la linea final.")

    with open("tarea.txt","r") as archivo:
        contenido = archivo.read()

    with open("archivo_copia.txt","w") as archivo_copia:
        archivo_copia.write(contenido)
except FileNotFoundError:
    print("El archivo no exite")
with open('entrada.txt','r') as archivo:
    contenido = archivo.read()
    print(contenido)

try:
    with open('prueba.txt','r') as archivo:
        contenido = archivo.read()
        print(contenido)
except FileNotFoundError:
    print("El archivo no existe")
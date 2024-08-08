#los conjuntos se pueden modificar y van dentro de llaves {}
numeros = {1,2,3,4,5,6,7,8,9,10}

numeros.add(11)
numeros.add(12)

print(numeros)

#los diccionarios tambien van estre llaves pero son clave valor
libros = {
    "titulo": "Cien Años de Soledad",
    "autor": "gabriel Garcia Marquez",
    "año": 1967
}

for clave in libros:
    print(clave)

for valor in libros.values():
    print(valor)

for claves, valores in libros.items():
    print(f"{claves}: {valores}")
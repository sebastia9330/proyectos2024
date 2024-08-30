#1
cincuenta = [x for x in range(1, 51) if x % 5 == 0]
print(cincuenta)

#2
lista_palabras = ["Juan","Pedro","Dilza","Samuel"]

caracteresPalabra = {palabra: len(palabra) for palabra in lista_palabras}
print(caracteresPalabra)

#3
vocales = {vocal for vocal in "murcielago"}
print(vocales)

todasVocales = {"a","e","i","o","u"}

union = vocales.difference(todasVocales)
print(union)

#correccion
vocales = {vocal for vocal in "murcielago" if vocal in "aeiou"}
print(vocales)  # {'a', 'e', 'i', 'o', 'u'}


#4
cuadrados = (x**2 for x in range(1, 100))

for numero in cuadrados:
    print(numero)
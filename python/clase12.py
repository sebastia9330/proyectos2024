#Clase 12: Python - Comprehensions y Expresiones Generadoras

#1. List Comprehensions
#Una list comprehension es una forma concisa de crear listas en Python. Permite generar una nueva lista aplicando 
# una expresión a cada elemento de una secuencia o iteración, de forma más compacta que con un bucle tradicional.
#Sintaxis Básica:

##[expresion for item in iterable]

#ejemplo

cuadrados = [x**2 for x in range(1, 6)]
print(cuadrados)  # [1, 4, 9, 16, 25]


#lista con condicionales
pares = [x for x in range(1, 11) if x % 2 == 0]
print(pares)  # [2, 4, 6, 8, 10]

#2. Dictionary Comprehensions
#Al igual que con las listas, puedes crear diccionarios de manera compacta utilizando dictionary comprehensions.
#Sintaxis Básica:

#{key: value for item in iterable}

#Ejemplo: Crear un diccionario con números del 1 al 5 como claves y sus cuadrados como valores.
cuadrados = {x: x**2 for x in range(1, 6)}
print(cuadrados)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

#3. Set Comprehensions
#De manera similar, puedes crear conjuntos (sets) usando set comprehensions.
#Sintaxis Básica:

#{expresion for item in iterable}

#Ejemplo: Crear un conjunto con los caracteres únicos en una cadena.
caracteres = {letra for letra in "abracadabra"}
print(caracteres)  # {'a', 'b', 'r', 'c', 'd'}

#4. Expresiones Generadoras
#Las expresiones generadoras permiten crear iteradores en una forma similar a las list comprehensions, pero en lugar de crear una lista en memoria, generan los elementos sobre la marcha.
#Sintaxis Básica:

#(expresion for item in iterable)

cuadrados = (x**2 for x in range(1, 6))

for numero in cuadrados:
    print(numero)


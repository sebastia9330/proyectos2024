#conjunto
conjunto = {1, 2, 3, 4, 5}
conjunto.add(6)
print(conjunto)  # {1, 2, 3, 4, 5, 6}


#tuplas
tupla = (1, 2, 3)
print(tupla[1])  # 2

#colecciones
from collections import deque

cola = deque([1, 2, 3])
cola.append(4)
print(cola)  # deque([1, 2, 3, 4])
cola.popleft()
print(cola)  # deque([2, 3, 4])

#diccionario anidado
diccionario_anidado = {
    "frutas": {"manzana": 10, "naranja": 20},
    "verduras": {"zanahoria": 30, "brocoli": 40}
}
print(diccionario_anidado["frutas"]["manzana"])  # 10

#conjunto anidado
conjunto_anidado = {frozenset({1, 2}), frozenset({3, 4})}
print(conjunto_anidado)  # {frozenset({1, 2}), frozenset({3, 4})}

#lista comprimida
lista = [x * 2 for x in range(5)]
print(lista)  # [0, 2, 4, 6, 8]

#diccionario comprimido
diccionario = {x: x * 2 for x in range(5)}
print(diccionario)  # {0: 0, 1: 2, 2: 4, 3: 6, 4: 8}

#conjunto comprimido
conjunto = {x * 2 for x in range(5)}
print(conjunto)  # {0, 2, 4, 6, 8}


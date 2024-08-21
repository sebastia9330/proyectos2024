#las listas son colecciones modificables de elementos
# Crear una lista
frutas = ["manzana", "banana", "cereza"]
print(frutas)

# Acceder a un elemento
print(frutas[0])  # manzana

# Modificar un elemento
frutas[1] = "kiwi"
print(frutas)  # ['manzana', 'kiwi', 'cereza']

#metodos comunes con listas
# Agregar un elemento al final
frutas.append("naranja")
print(frutas)  # ['manzana', 'kiwi', 'cereza', 'naranja']

# Eliminar un elemento
frutas.remove("kiwi")
print(frutas)  # ['manzana', 'cereza', 'naranja']

# Ordenar la lista
frutas.sort()
print(frutas)  # ['cereza', 'manzana', 'naranja']

#tuplas
#Las tuplas son colecciones ordenadas e inmutables de elementos.
# Crear una tupla
numeros = (1, 2, 3, 4, 5)
print(numeros)

# Acceder a un elemento
print(numeros[2])  # 3

# Las tuplas son inmutables, no se pueden modificar elementos.
# Intentar modificar un elemento causará un error:
# numeros[2] = 10  # Esto dará un error

# Desempaquetar una tupla en variables
a, b, c, d, e = numeros
print(a, b, c, d, e)  # 1 2 3 4 5

#Diccionarios
#Los diccionarios son colecciones desordenadas de pares clave-valor.
# Crear un diccionario
estudiante = {"nombre": "Ana", "edad": 22, "curso": "Matemáticas"}
print(estudiante)

# Acceder a un valor
print(estudiante["nombre"])  # Ana

# Modificar un valor
estudiante["edad"] = 23
print(estudiante)  # {'nombre': 'Ana', 'edad': 23, 'curso': 'Matemáticas'}

#metodos comunes con diccionarios
# Agregar un nuevo par clave-valor
estudiante["nota"] = 9.5
print(estudiante)  # {'nombre': 'Ana', 'edad': 23, 'curso': 'Matemáticas', 'nota': 9.5}

# Eliminar un par clave-valor
del estudiante["curso"]
print(estudiante)  # {'nombre': 'Ana', 'edad': 23, 'nota': 9.5}

# Obtener todas las claves
print(estudiante.keys())  # dict_keys(['nombre', 'edad', 'nota'])

# Obtener todos los valores
print(estudiante.values())  # dict_values(['Ana', 23, 9.5])

#conjuntos
#Los conjuntos son colecciones desordenadas de elementos únicos.
# Crear un conjunto
colores = {"rojo", "verde", "azul"}
print(colores)

#operaciones con conjuntos
# Agregar un elemento
colores.add("amarillo")
print(colores)  # {'rojo', 'verde', 'azul', 'amarillo'}

# Eliminar un elemento
colores.remove("rojo")
print(colores)  # {'verde', 'azul', 'amarillo'}

# Operación de unión
otros_colores = {"negro", "blanco"}
todos_los_colores = colores.union(otros_colores)
print(todos_los_colores)  # {'verde', 'amarillo', 'blanco', 'negro', 'azul'}
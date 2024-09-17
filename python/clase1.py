#clase numero 1

#1. Sintaxis Básica de Python
#Sintaxis significa las reglas que debe seguir un lenguaje de programación para que el código sea válido. Python es 
# conocido por ser muy legible y utilizar una sintaxis simple y limpia, lo que lo hace ideal para principiantes.

#Indentación en Python
#A diferencia de otros lenguajes de programación que usan llaves {} para agrupar bloques de código, Python usa 
# indentación (espacios o tabuladores) para definir la estructura de los bloques de código, como en funciones, 
# bucles o condicionales.

#Ejemplo de indentación:

if 5 > 3:
    print("5 es mayor que 3")

#Aquí, la línea print("5 es mayor que 3") está indentada (es decir, tiene 4 espacios antes del texto). Esto indica que 
# esa línea pertenece al bloque if. Si no tuviera la indentación correcta, Python mostraría un error.

#Comentarios en Python
#Los comentarios son textos que el programa ignora, pero que son útiles para que los humanos entiendan el código. Para 
# escribir un comentario en Python, se usa el símbolo #.


# Este es un comentario y Python lo ignorará
print("Hola Mundo")  # Este es otro comentario

#2. Tipos de Datos en Python
#Cada valor en Python tiene un tipo, que define qué tipo de dato es y qué operaciones puedes hacer con él. Aquí vamos a 
# ver los tipos de datos más comunes.

#a) Enteros (int)
#Los números enteros son aquellos sin parte decimal. Puedes sumar, restar, multiplicar, etc.

edad = 25  # Entero

#b) Flotantes (float)
#Los números flotantes son aquellos que tienen una parte decimal. Estos son útiles para valores que requieren precisión, como precios, temperaturas, etc.

altura = 1.75  # Flotante

#c) Cadenas de Texto (str)
#Una cadena de texto es una secuencia de caracteres (letras, números, símbolos) encerrados entre comillas simples o 
# dobles.

nombre = "Ana"
mensaje = 'Hola, ¿cómo estás?'

#Puedes realizar varias operaciones con las cadenas de texto, como concatenarlas:

nombre_completo = "Ana" + " " + "Martínez"
print(nombre_completo)  # "Ana Martínez"

#d) Listas (list)
#Las listas son colecciones de elementos que puedes modificar. Se escriben entre corchetes [] y pueden contener cualquier tipo de dato (números, cadenas, otras listas).

frutas = ["manzana", "pera", "naranja"]
print(frutas[0])  # Imprime "manzana" (el primer elemento de la lista)

#Las listas son mutables, lo que significa que puedes cambiar sus elementos después de haberlas creado:

frutas[0] = "kiwi"
print(frutas)  # ['kiwi', 'pera', 'naranja']

#e) Tuplas (tuple)
#Las tuplas son similares a las listas, pero no se pueden modificar una vez creadas. Son inmutables.

punto = (3, 4)
# No puedes hacer algo como punto[0] = 5, ya que las tuplas no se pueden cambiar.

#f) Diccionarios (dict)
#Un diccionario almacena pares de clave-valor. Las claves pueden ser números o cadenas, y los valores pueden ser cualquier cosa (números, listas, otras cadenas).

persona = {"nombre": "Carlos", "edad": 30}
print(persona["nombre"])  # Imprime "Carlos"

#Los diccionarios son útiles cuando quieres relacionar valores de forma clara, como nombres y edades, palabras y significados, etc.

#3. Operadores en Python
#Los operadores son símbolos que realizan operaciones en uno o más valores. Los operadores más comunes incluyen los aritméticos (para matemáticas), los de comparación (para comparar valores) y los lógicos (para combinar condiciones).

#a) Operadores Aritméticos
#Suma: +
#Resta: -
#Multiplicación: *
#División: /
#División entera (sin decimales): //
#Módulo (resto de la división): %
#Ejemplo:

a = 10
b = 3
print(a + b)  # Imprime 13
print(a % b)  # Imprime 1, que es el resto de 10 dividido por 3

#b) Operadores de Comparación
#Se usan para comparar valores. Devuelven True o False según el resultado de la comparación.

#Mayor que: >
#Menor que: <
#Igual a: ==
#Diferente de: !=
#Ejemplo:

x = 10
y = 5
print(x > y)  # True, porque 10 es mayor que 5
print(x == y)  # False, porque 10 no es igual a 5

#c) Operadores Lógicos
#Se usan para combinar condiciones:

#AND (and): Devuelve True si ambas condiciones son verdaderas.
#OR (or): Devuelve True si al menos una condición es verdadera.
#NOT (not): Invierte el valor de la condición (si es True pasa a False y viceversa).
#Ejemplo:

a = True
b = False
print(a and b)  # False, porque ambas no son verdaderas
print(a or b)  # True, porque al menos una es verdadera
print(not a)  # False, porque a es True y el not lo invierte

#4. Estructuras de Control
#Las estructuras de control son herramientas que permiten que tu programa tome decisiones o repita acciones, dependiendo de las condiciones.

#a) Condicionales (if, elif, else)
#Los condicionales permiten que tu programa decida qué hacer según una condición.

x = 10
if x > 5:
    print("x es mayor que 5")
elif x == 5:
    print("x es igual a 5")
else:
    print("x es menor que 5")

#if evalúa una condición. Si es True, se ejecuta el bloque de código.
#elif es "else if" y solo se evalúa si el if anterior fue False.
#else se ejecuta cuando todas las condiciones anteriores son falsas.

#b) Bucles
#Los bucles permiten que tu código se repita varias veces.

#Bucle for: Itera sobre una secuencia como una lista, tupla o cadena.

for fruta in ["manzana", "naranja", "plátano"]:
    print(fruta)

#Este bucle imprimirá cada elemento de la lista.

#Bucle while: Repite el bloque de código mientras una condición sea verdadera.
x = 0
while x < 5:
    print(x)
    x += 1  # Suma 1 a x en cada iteración

#5. Funciones en Python
#Las funciones son bloques de código que puedes reutilizar. Se definen con la palabra clave def y pueden recibir parámetros (datos de entrada).

def saludar(nombre):
    print(f"Hola, {nombre}!")

#Aquí, hemos definido una función saludar que toma un parámetro nombre y lo usa para imprimir un mensaje. Puedes llamar a la función así:

saludar("Juan")  # Imprime "Hola, Juan!"

#Las funciones permiten que tu código sea más organizado y reutilizable.

#6. Módulos y Bibliotecas
#Python tiene muchos módulos (bibliotecas de funciones) que puedes importar para agregar funcionalidades extras a tu código.

#Para usar un módulo, lo importas con import.
#Por ejemplo, para usar funciones matemáticas avanzadas, puedes importar el módulo math:

import math
print(math.sqrt(16))  # Imprime 4.0 (la raíz cuadrada de 16)

#Tarea Práctica:
#Crea un programa que pida al usuario ingresar dos números, luego realiza y muestra las siguientes operaciones entre ellos:

#Suma
#Resta
#Multiplicación
#División
#Crea una función que reciba un número como parámetro y determine si es par o impar. Usa operadores y estructuras de control para esto.

#Extra: Crea un programa que imprima los números del 1 al 10 utilizando un bucle while y luego otro con un bucle for.
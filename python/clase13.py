#Clase 13: Python - Manejo de Excepciones
#El manejo de excepciones en Python es una técnica que permite gestionar errores en tiempo de ejecución. En lugar de 
# que un programa falle abruptamente cuando ocurre un error, el manejo de excepciones permite capturar el error, tratarlo 
# adecuadamente y continuar con la ejecución del programa de manera controlada.

#1. ¿Qué es una Excepción?

#Una excepción es un evento anómalo que puede ocurrir durante la ejecución de un programa y que interrumpe el flujo normal de las instrucciones. Ejemplos comunes de excepciones incluyen:

#ZeroDivisionError: Intentar dividir un número por cero.
#IndexError: Acceder a un índice fuera de rango en una lista.
#KeyError: Intentar acceder a una clave inexistente en un diccionario.
#ValueError: Uso incorrecto del tipo de valor, como convertir una cadena no numérica a un entero.
#2. Bloques try y except

#El manejo de excepciones se realiza principalmente mediante los bloques try y except.

#Sintaxis Básica:
    #try:
        # Código que podría generar una excepción
    #except NombreDeLaExcepción:
        # Código para manejar la excepción
#Ejemplo: Capturando un error de división por cero.
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Error: No se puede dividir por cero.")
""" Explicación: En este caso, cuando ocurre el ZeroDivisionError, el flujo del programa pasa directamente al bloque 
except y ejecuta el código dentro de él, evitando que el programa termine abruptamente. """

""" Explicación: En este caso, cuando ocurre el ZeroDivisionError, el flujo del programa pasa directamente al bloque except
y ejecuta el código dentro de él, evitando que el programa termine abruptamente. """
try:
    numero = int(input("Introduce un número: "))
    resultado = 10 / numero
except ZeroDivisionError:
    print("Error: No se puede dividir por cero.")
except ValueError:
    print("Error: No ingresaste un número válido.")

""" Explicación: Este ejemplo maneja tanto el ZeroDivisionError como el ValueError, cada uno con un mensaje diferente.

4. Bloques else y finally

Además de try y except, Python proporciona dos bloques adicionales: else y finally.

Bloque else: Se ejecuta si el bloque try no lanza ninguna excepción. """
try:
    resultado = 10 / 2
except ZeroDivisionError:
    print("Error: No se puede dividir por cero.")
else:
    print("La operación fue exitosa, el resultado es:", resultado)
""" Explicación: Si no ocurre ninguna excepción, el código dentro de else se ejecuta.

Bloque finally: Se ejecuta siempre, independientemente de si se lanzó una excepción o no. """

try:
    resultado = 10 / 2
except ZeroDivisionError:
    print("Error: No se puede dividir por cero.")
finally:
    print("Esta línea siempre se ejecutará.")
""" Explicación: finally es útil para limpiar recursos, como cerrar archivos o conexiones de bases de datos. """
""" 
5. Lanzar Excepciones con raise

Puedes generar manualmente una excepción en Python utilizando la palabra clave raise.

Ejemplo: Lanzando una excepción si el usuario ingresa un valor negativo. """
numero = int(input("Introduce un número positivo: "))
if numero < 0:
    raise ValueError("El número no puede ser negativo.")
""" Explicación: Si el número ingresado es negativo, se lanza un ValueError con un mensaje personalizado. """

""" Manejo Básico de Excepciones: Escribe un programa que solicite al usuario que ingrese dos números y divida el primero por el segundo. 
Utiliza bloques try y except para manejar el caso en que el usuario ingrese un valor no numérico o intente dividir por cero. """
numero1 = int(input("Digita el primer numero: "))
numero2 = int(input("Digita el segundo numero: "))

try:
    resultado = numero1/numero2
    print(f"El resultado es: {resultado}")
except ZeroDivisionError:
    print("EL segundo numero no puede ser cero.")

""" Manejo de Múltiples Excepciones: Amplía el programa anterior para manejar casos en los que el usuario intente realizar otras 
operaciones inválidas, como ingresar un número muy grande o muy pequeño (puedes usar valores extremos para ilustrarlo). """



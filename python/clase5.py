#definir una funcion
def nombre_funcion():
    print("Hola, esta es una función")

nombre_funcion()  # Llama a la función y ejecuta su código

#funciones con parametros
def saludar(nombre):
    print(f"Hola, {nombre}")

saludar("Carlos")  # Imprime "Hola, Carlos"

#funciones de retorno
def sumar(a, b):
    return a + b

resultado = sumar(5, 3)
print(resultado)  # Imprime 8

#funciones con multiples valores y valores por defecto
def multiplicar(a, b=2):
    return a * b

print(multiplicar(3, 4))  # Imprime 12
print(multiplicar(5))  # Imprime 10 (usa el valor predeterminado de b)

#las variables cradad dentro de una funcion tiene alcance solo local
def ejemplo_scope():
    x = 10  # Variable local
    print(x)

ejemplo_scope()  # Imprime 10
# print(x)  # Esto dará un error porque 'x' no existe fuera de la función


#funciones anidadas
def funcion_externa():
    def funcion_interna():
        print("Soy la función interna")
    funcion_interna()
    
funcion_externa()  # Llama a la función interna desde la externa

#recursion
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))  # Imprime 120
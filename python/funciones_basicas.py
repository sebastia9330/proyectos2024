def calcular_area_rectangulo(ancho, alto):
    return (ancho * alto)/2

area = calcular_area_rectangulo(3,5)
print(f"el area del triangulo es: {area}")


def es_par(numero):
    return numero % 2 == 0

# Verificar si los números son pares o impares
print(es_par(4))  # True
print(es_par(7))  # False



def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Imprimir el 6º número de Fibonacci
print(fibonacci(3))  # Imprime 8

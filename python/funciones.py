def convertir_celsius_a_fahrenheit(celsius):
    return (celsius * 1.8) + 32

celsius = float(input("Introduce la temperatura en grados Celsius: "))
fahrenheit = convertir_celsius_a_fahrenheit(celsius)
print(f"La temperatura en Fahrenheit es: {fahrenheit}")

grados = convertir_celsius_a_fahrenheit(0)
print(f"la conversion es {grados}")


#es par
numero = float(input("introduce un numero para verificar si es par: "))
def es_par(numero):
    if(numero % 2 == 0):
        print(f"el numero: {numero}, es par")
    else:
        print(f"el numero: {numero}, es impar")
        return numero
    
es_par(numero)
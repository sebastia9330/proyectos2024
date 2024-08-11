def convertir_celsius_a_fahrenheit(celsius):
    return (celsius * 1.8) + 32

celsius = float(input("Introduce la temperatura en grados Celsius: "))
fahrenheit = convertir_celsius_a_fahrenheit(celsius)
print(f"La temperatura en Fahrenheit es: {fahrenheit}")

grados = convertir_celsius_a_fahrenheit(0)
print(f"la conversion es {grados}")

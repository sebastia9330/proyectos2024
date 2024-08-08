#solicitar informacion al usuario
nombre = input("¿Cuál es tu nombre? ")
edad = int(input("¿Cuántos años tienes? "))
altura = float(input("¿Cuál es tu altura en metros? "))

#saludo
print(f"Hola, {nombre}!")

#edad en 10 años
diez = edad + 10
print(f"tu edad en 10 años sera: {diez}")

centimetros = altura * 100
print(f"tu altula en centimetro es: {centimetros}Cm")


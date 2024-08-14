#definir una funcion sin parametros
def saludar():
    print("¡Hola, Mundo")

saludar()

#Definir una funcion con parametros
def saludar(nombre):
    print(f"?hola, {nombre}")

#llamar a la funcion con un argumento
saludar("Juan")

#definir una funcion que devuelve un valor
def suma(a, b):
    return a + b

#llamar a la funcion y almacenar el resultado
resultado = suma(5,3)
print(f"La suma es: {resultado}")

#definir una funcion con un argumento por defecto
def presentar(nombre, edad=30):
    print(f"Nombre: {nombre}, Edad: {edad}")

#llamar a la funcion con y sin el argumento por defecto
presentar("ana")
presentar("Luis", 25)

#usar *args para argumentos variables
def sumar_todos(*args):
    return sum(args)

print(sumar_todos(1,2,3))
print(sumar_todos(4,5,6,7,8))

#usar **kwargs para argumentos con nombre variables
def mostrar_info(**kwargs):
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

mostrar_info(nombre="carlos", edad=28, ciudad="Madrid")

#Aquí, la función sumar es decorada para mostrar mensajes antes y después de su ejecución.
from datetime import datetime

def decorador(fuction):
    def fuctionFecha():
        print(f"la fecha es {datetime.now()}")
        fuction()
    return fuctionFecha

@decorador
def hoy():
    print(f"hoy es {datetime.now()}")

hoy()

#Escribe un decorador que tome como parámetro un número y repita la ejecución de una función tantas veces como se 
# indique en el parámetro.
def repetidor(veces):
    def mi_decorador(funcion):
        def modificada():
            for x in range(veces):
                funcion()
        return modificada
    return mi_decorador
    
@repetidor(9)
def cuenta():
    print(f"la cuenta es ")

cuenta()


#Implementa un decorador que verifique si un usuario tiene permisos para ejecutar una función, y solo le permita 
# hacerlo si tiene los permisos correctos (puedes simular el sistema de permisos con una variable simple).
def verificar_permisos(funcion):
    def funcion_modificada(*args, **kwargs):
        usuario_tiene_permisos = True  # Simulando un sistema de permisos
        if usuario_tiene_permisos:
            return funcion(*args, **kwargs)
        else:
            print("Permisos insuficientes.")
    return funcion_modificada

@verificar_permisos
def acceso_restringido():
    print("Acceso concedido.")

acceso_restringido()

#Crea un decorador que transforme el texto devuelto por una función en mayúsculas.
def en_mayusculas(funcion):
    def funcion_modificada(*args, **kwargs):
        resultado = funcion(*args, **kwargs)
        return resultado.upper()
    return funcion_modificada

@en_mayusculas
def obtener_saludo():
    return "hola, mundo!"

print(obtener_saludo())

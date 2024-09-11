#Clase 15: Decoradores en Python
#Los decoradores en Python son una herramienta avanzada que permite modificar el comportamiento de una función o
#  método sin cambiar su código fuente. Un decorador es esencialmente una función que toma otra función como 
# argumento, le añade alguna funcionalidad adicional y luego devuelve la función modificada.

#1. ¿Qué es un Decorador?
#Un decorador en Python es una función que envuelve otra función. Se utiliza para añadir o modificar el 
#comportamiento de las funciones sin cambiar directamente su código. Los decoradores son muy útiles en casos donde 
#necesitamos aplicar el mismo comportamiento en varias funciones, como la autenticación, el logging, o el control de 
#acceso.

#2. Función como Primer Ciudadano
#En Python, las funciones son "primeros ciudadanos", lo que significa que pueden ser tratadas como cualquier otra 
#variable. Se pueden pasar como argumentos a otras funciones, almacenarlas en estructuras de datos y devolverlas como 
#resultados de otras funciones.

#Ejemplo básico de un decorador:
def mi_decorador(funcion):
    def funcion_modificada():
        print("Antes de ejecutar la función.")
        funcion()
        print("Después de ejecutar la función.")
    return funcion_modificada

@mi_decorador
def saludar():
    print("Hola, mundo!")

saludar()

#Explicación:

#El decorador mi_decorador toma la función saludar como argumento.
#Dentro del decorador, se define funcion_modificada, que añade código antes y después de llamar a la función original 
#(funcion()).
#La sintaxis @mi_decorador es equivalente a saludar = mi_decorador(saludar).

#3. Decoradores con Argumentos
#Un decorador también puede aceptar parámetros. Para ello, el decorador debe tener una estructura más compleja, 
# utilizando funciones anidadas.

#Ejemplo:
def repetidor(veces):
    def decorador(funcion):
        def funcion_modificada():
            for _ in range(veces):
                funcion()
        return funcion_modificada
    return decorador

@repetidor(7)
def saludar():
    print("Hola!")

saludar()

#Aquí, el decorador repetidor repite la ejecución de la función saludar 8 veces.

#4. Decoradores en Funciones con Parámetros
#Los decoradores también funcionan con funciones que aceptan parámetros. Simplemente se deben ajustar para recibir 
#y manejar los argumentos de la función decorada.

#Ejemplo:

def mi_decorador(funcion):
    def funcion_modificada(*args, **kwargs):
        print("Ejecutando función decorada")
        resultado = funcion(*args, **kwargs)
        print("Función ejecutada")
        return resultado
    return funcion_modificada

@mi_decorador
def sumar(a, b):
    return a + b

print(sumar(3, 4))

#Aquí, la función sumar es decorada para mostrar mensajes antes y después de su ejecución.
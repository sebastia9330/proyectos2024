#importar el modulo
import mi_modulo

#usar funciones del modulo
resultado_suma = mi_modulo.sumar(5,3)
resultado_resta = mi_modulo.restar(5,3)
print(f"la suma es: {resultado_suma}")
print(f"la resta es: {resultado_resta}")

#acceder a una variable del modulo
print(f"el valor de PI es: {mi_modulo.PI}")


# Importar funciones específicas
from mi_modulo import sumar, restar

# Usar las funciones importadas
print(sumar(10, 5))
print(restar(10, 5))
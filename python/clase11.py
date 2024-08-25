#importar un modulo
import math

print(math.sqrt(16))  # 4.0

#importar funciones especificas del modulo
from math import sqrt, pi

print(sqrt(25))  # 5.0
print(pi)        # 3.141592653589793

#con la palabra "as" puedes ponerle un alias al modulo
import math as m

print(m.sqrt(9))  # 3.0

from modulos.mi_modulo import sumar, restar

print(sumar(5, 3))  # 8
print(restar(10, 4))  # 6

import os

print(os.getcwd())  # Muestra el directorio de trabajo actual

import datetime

hoy = datetime.date.today()
print(hoy)  # Muestra la fecha actual

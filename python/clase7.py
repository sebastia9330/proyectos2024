#para definir una clase usamos la palabra reservada "class"
class Perro:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def ladrar(self):
        print(f"{self.nombre} está ladrando.")

# Crear un objeto (instancia de la clase Perro)
mi_perro = Perro("Rex", 5)
print(mi_perro.nombre)  # Imprime "Rex"
mi_perro.ladrar()  # Imprime "Rex está ladrando."

#Atributos: Son variables que pertenecen a una clase o a un objeto.
#Métodos: Son funciones que pertenecen a una clase y operan sobre sus atributos.

class Coche:
    def __init__(self, marca, modelo, anio):
        self.marca = marca
        self.modelo = modelo
        self.anio = anio

    def arrancar(self):
        print(f"El {self.marca} {self.modelo} del {self.anio} está arrancando.")

# Crear un objeto de la clase Coche
mi_coche = Coche("Toyota", "Corolla", 2020)
mi_coche.arrancar()  # Imprime "El Toyota Corolla del 2020 está arrancando."

#encapsulamiento
class CuentaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self._saldo = saldo  # Atributo encapsulado (privado)

    def depositar(self, cantidad):
        self._saldo += cantidad

    def retirar(self, cantidad):
        if cantidad <= self._saldo:
            self._saldo -= cantidad
        else:
            print("Fondos insuficientes")

    def mostrar_saldo(self):
        print(f"Saldo actual: {self._saldo}")

# Crear un objeto de la clase CuentaBancaria
mi_cuenta = CuentaBancaria("Juan", 1000)
mi_cuenta.depositar(500)
mi_cuenta.mostrar_saldo()  # Imprime "Saldo actual: 1500"
mi_cuenta.retirar(2000)  # Imprime "Fondos insuficientes"

#herencia
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hacer_sonido(self):
        print("Este animal hace un sonido.")

class Gato(Animal):
    def hacer_sonido(self):
        print(f"{self.nombre} dice miau.")

# Crear un objeto de la clase Gato
mi_gato = Gato("Misi")
mi_gato.hacer_sonido()  # Imprime "Misi dice miau."


#poliformismo
class Perro(Animal):
    def hacer_sonido(self):
        print(f"{self.nombre} dice guau.")

# Crear una lista de diferentes animales
animales = [Gato("Misi"), Perro("Rex")]

# Llamar al método hacer_sonido() en cada objeto
for animal in animales:
    animal.hacer_sonido()

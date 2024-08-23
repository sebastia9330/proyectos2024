class Vehiculo:
    def __init__(self,marca,modelo):
        self.marca = marca
        self.modelo = modelo

    def describir(self):
        print(f"el vehiculo de marca {self.marca} es modelo {self.modelo}")

class Coche(Vehiculo):
    def __init__(self, marca, modelo,coche):
        super().__init__(marca, modelo)
        self.coche = coche

    def describir(self):
        print(f"la {self.coche} marca {self.marca} es modelo {self.modelo}")

class Moto(Vehiculo):
    def __init__(self, marca, modelo,color):
        super().__init__(marca, modelo)
        self.color = color

    def describir(self):
        print(f"la moto de color {self.color}, marca {self.marca} y modelo {self.modelo} esta mal parqueada")

moto1 = Moto("Auteco",1993,"negro")
moto1.describir()

coche1 = Coche("ford","fiesta","camioneta")
coche1.describir()
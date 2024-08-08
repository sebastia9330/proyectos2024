#las listas son mutables y se encierran en corchetes []
peliculas = ["la vida es bella", "sin limites", "batman", "cuestion de tiempo", "que paso ayer"]

peliculas[1] = "Juego de Honor"

print(peliculas)

#las tuplas son inmutables y se encierran entre parentecis ()

ciudades = ("Roma", "Oslo", "New York")

print(ciudades)

for ciudad in ciudades:
    print(ciudad)
conjunto1 = {1,2,3,4,5}
conjunto2 = {6,7,8,9,10}

todosLosNumeros = conjunto1.union(conjunto2)
print(todosLosNumeros)

todosLosNumeros1 = conjunto1.intersection(conjunto2)
print(todosLosNumeros1)

todosLosNumeros2 = conjunto1.difference(conjunto2)
print(todosLosNumeros2)

# Inventario de la tienda
inventario = {
    "Frutas": {
        "Manzanas": {"cantidad": 50, "precio": 0.5},
        "Bananas": {"cantidad": 30, "precio": 0.3},
        "Naranjas": {"cantidad": 40, "precio": 0.6}
    },
    "Verduras": {
        "Zanahorias": {"cantidad": 20, "precio": 0.2},
        "Tomates": {"cantidad": 25, "precio": 0.4},
        "Lechugas": {"cantidad": 15, "precio": 0.7}
    }
}


# Función para actualizar la cantidad de un artículo específico
def actualizar_cantidad(categoria, articulo, nueva_cantidad):
    if categoria in inventario and articulo in inventario[categoria]:
        inventario[categoria][articulo]["cantidad"] = nueva_cantidad
        print(f"Cantidad actualizada: {articulo} ahora tiene {nueva_cantidad} unidades.")
    else:
        print(f"El artículo {articulo} en la categoría {categoria} no existe en el inventario.")

# Actualizar la cantidad de manzanas a 60
actualizar_cantidad("Frutas", "Manzanas", 60)

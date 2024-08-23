class Libro:
    def __init__(self,titulo,autor,paginas):
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def resumen(self):
        print(f"el autor del libro {self.titulo} es: {self.autor}")

libro1 = Libro("inferno","Dan Brown", 365)
libro2 = Libro("Cien Años de Soledad","Gabriel Garcia Marquez", 399)
libro1.resumen()
libro2.resumen()
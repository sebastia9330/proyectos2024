import csv

with open('estudiantes.csv', 'r') as archivo_csv:
    lector_csv = csv.reader(archivo_csv)
    encabezados = next(lector_csv)  # Leer la primera fila (encabezados)
    
    with open('estudiantes_aprobados.csv', 'w', newline='') as archivo_salida:
        escritor_csv = csv.writer(archivo_salida)
        escritor_csv.writerow(encabezados)  # Escribir los encabezados
        
        # Filtrar estudiantes aprobados
        for fila in lector_csv:
            nombre, edad, nota = fila
            if float(nota) >= 3.0:
                escritor_csv.writerow(fila)

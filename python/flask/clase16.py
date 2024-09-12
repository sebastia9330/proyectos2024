#Clase 16: Introducción a Flask y Desarrollo Web con Python
#Objetivo:
#Familiarizarte con Flask, un framework web ligero de Python que permite crear aplicaciones web simples de forma rápida 
# y fácil.

#Contenido de la clase:
#1. ¿Qué es Flask?
#Flask es un micro-framework para desarrollo web que proporciona las herramientas esenciales para crear aplicaciones web. A diferencia de Django (otro framework de Python), Flask es minimalista y te da la flexibilidad de agregar solo lo que necesites para tu aplicación.

#Ventajas de Flask:

#Ligero: Solo incluye lo esencial, como enrutamiento y manejo de peticiones.
#Flexible: Permite agregar librerías según la necesidad del proyecto.
#Fácil de usar: Ideal para empezar con proyectos simples.
#2. Instalación de Flask
#Para comenzar, primero instala Flask en tu entorno de trabajo con el siguiente comando:

#bash

#pip install Flask

#3. Tu primera aplicación en Flask
#Vamos a crear una aplicación básica con Flask que simplemente responda "¡Hola, Mundo!" cuando visitemos la página 
# principal en nuestro navegador.

#Paso 1: Crea un archivo llamado app.py con el siguiente código:

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '¡Hola, Mundo!'

if __name__ == '__main__':
    app.run(debug=True)

#Explicación:

#from flask import Flask: Importa la clase Flask del módulo Flask.
#app = Flask(__name__): Crea una instancia de la aplicación.
#@app.route('/'): Define una ruta o "URL" que estará asociada a la función hello_world().
#app.run(debug=True): Inicia la aplicación en modo de depuración.
#Paso 2: Ejecuta tu aplicación desde la terminal:

#bash

#python app.py

#Paso 3: Abre tu navegador y visita http://127.0.0.1:5000/. Verás la frase "¡Hola, Mundo!" en la pantalla.

#4. Rutas y métodos HTTP
#Flask te permite manejar varias rutas en una aplicación y responder a diferentes métodos HTTP como GET y POST.

#Ejemplo: Vamos a agregar más rutas a nuestra aplicación.

#python

@app.route('/saludar/<nombre>')
def saludar(nombre):
    return f'¡Hola, {nombre}!'

@app.route('/sumar/<int:a>/<int:b>')
def sumar(a, b):
    return f'La suma de {a} y {b} es {a + b}'

#Explicación:

#@app.route('/saludar/<nombre>'): Define una ruta dinámica donde el valor entre los < > será pasado como argumento a la
#  función saludar.
#@app.route('/sumar/<int:a>/<int:b>'): Define una ruta que toma dos números enteros y devuelve la suma de ambos.
#Ahora puedes visitar en tu navegador:

#http://127.0.0.1:5000/saludar/TuNombre
#http://127.0.0.1:5000/sumar/5/3

#5. Plantillas con Jinja2
#Flask utiliza Jinja2 para manejar plantillas HTML y renderizarlas dinámicamente.

#Paso 1: Crea una carpeta llamada templates y dentro de ella, un archivo index.html:

#html

#<!DOCTYPE html>
#<html lang="es">
#<head>
#    <meta charset="UTF-8">
#    <title>Página Flask</title>
#</head>
#<body>
#    <h1>{{ saludo }}</h1>
#    <p>Esta es una página web generada con Flask y Jinja2.</p>
#</body>
#</html>


# Paso 2: Modifica app.py para renderizar la plantilla:

#python

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    saludo = '¡Hola, desde Flask y Jinja2!'
    return render_template('index.html', saludo=saludo)

if __name__ == '__main__':
    app.run(debug=True)

#Explicación:

#from flask import render_template: Importa la función para renderizar plantillas.
#render_template('index.html', saludo=saludo): Renderiza el archivo index.html y pasa el valor de la variable saludo a la plantilla.
#Cuando visites la página principal, verás el mensaje dinámico renderizado en la plantilla HTML.

#Ejercicios prácticos
#Ejercicio 1: Crea una nueva ruta /multiplicar/<int:a>/<int:b> que reciba dos números y devuelva el resultado de multiplicarlos.

#Ejercicio 2: Modifica la aplicación para que en la página principal también se muestre la fecha actual utilizando la función datetime de Python.

#Ejercicio 3: Crea un formulario simple en HTML con Flask que permita ingresar dos números. Al enviarlo, debe calcular la suma de esos números y mostrar el resultado en la misma página.
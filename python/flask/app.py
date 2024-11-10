from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    saludo = 'Practicando con flask'
    return render_template('index.html', saludo=saludo)

if __name__ == '__main__':
    app.run(debug=True)


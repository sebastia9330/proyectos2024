const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
});

connection.connect((err) => {
    if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});

app.post('/register', (req, res) => {
    const { nombre, genero, autor } = req.body;
    const query = `INSERT INTO libros (nombre, genero, autor) VALUES (?, ?, ?)`;
    connection.query(query, [nombre, genero, autor], (err, result) => {
    if (err) {
        console.error('Error al insertar el libro: ' + err.stack);
        res.status(400).send('Error al registrar el libro');
    } else {
        console.log('Libro registrado con éxito');
        res.status(201).send('Libro registrado con éxito');
    }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


/* app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
}); */

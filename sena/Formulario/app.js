const express = require('espress');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/biblioteca', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.log("No hay coneccion"));
db.once('open', () => {
    console.log("conoectado a la base de datos");
});

const libros = new mongoose.Schema({
    nombre: String,
    genero: String,
    autor: String,
});

const libro = mongoose.model('libro', libros);

app.post('/register', async (req, res) => {
    const {nombre, genero, autor} = req.body;
    const nuevoLibro = new libro({nombre, genero, autor});
    try{
        await nuevoLibro.save();
        res.status(201).send('Libro registrado con éxito');
    }catch(error){
        res.status(400).send('Error al registrar el libro')
    }
});

app.listen(port, () => {
    console.log('servidor corriendo en http://localhost:${port}');
});
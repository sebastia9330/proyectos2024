const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');
console.log(movies);

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { title, director, year, raiting } = req.body;
    if (title && director && year && raiting) {
        const id = movies.length + 1;
        const newMovie = { ...req.body, id };
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({ error: 'Aquí hubo un error' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let indexToRemove = -1;
    movies.forEach((movie, i) => {
        if (movie.id == id) {
            indexToRemove = i;
        }
    });
    if (indexToRemove !== -1) {
        movies.splice(indexToRemove, 1);
        res.json({ message: 'Película eliminada con éxito' });
    } else {
        res.status(404).json({ error: 'Movie not found' });
    }
});

module.exports = router;

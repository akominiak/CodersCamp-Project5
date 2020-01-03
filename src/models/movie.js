const mongoose = require('mongoose');
require('mongoose-type-url');

const movie = new mongoose.Schema({
    movieId: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        max: 100
    },
    name: {
        type: String,
        required: true,
        unique: true,
        min: 1,
        max: 60
    },
    description: {
        type: String,
        min: 1,
        max: 200
    },
    url: {
        type: mongoose.SchemaTypes.Url,
        required: true,
        min: 1,
        max: 100
    }
});

const Movie = mongoose.model('Movie', movie);

module.exports.Movie = Movie;
const Joi = require('joi');
const mongoose = require('mongoose');

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
        type: String,
        required: true,
        min: 1,
        max: 100
    }
});
const Movie = mongoose.model('Movie', movie);

function validateMovie(newMovie) {

    const schema = {
        movieId: Joi.Number().min(1).max(100).required().unique(),
        name: Joi.string().min(1).max(60).required().unique(),
        url: Joi.string().min(1).max(100).required()
    };

    return Joi.validate(newMovie, schema);
}

module.exports.validate = validateMovie;
module.exports.Movie = Movie;
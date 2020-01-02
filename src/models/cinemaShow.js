const mongoose = require('mongoose');

const show = new mongoose.Schema({
    movieId: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    date: {
        type: String,
        min: 1,
        max: 10
    },
    hour: {
        type: String,
        required: true,
        min: 1,
        max: 6
    }
});

const Show = mongoose.model('Show', show);

module.exports.Show = Show;
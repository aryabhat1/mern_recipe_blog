const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 'This is required field.'
    },
    description: {
        type: String,
        require: 'This is a required field.'
    },

    email: {
        type: String,
        require: 'This is a required field.'
    },
    ingredients: {
        type: Array,
        require: 'This is a required field.'
    },
    category: {
        type: String,
        enum: ['Thai', 'American', 'Indian', 'Chinese', 'Mexican'],
        require: 'This is a required field.'
    },
    image: {
        type: String,
        required: 'This is a required field.'
    },

});

module.exports = mongoose.model('Recipe', recipeSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const coffeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Coffee = mongoose.model('Coffee', coffeeSchema);
module.exports = Coffee;
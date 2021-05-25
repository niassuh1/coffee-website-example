const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bakerySchema = new Schema({
    imageURL: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Bakery = mongoose.model('Bakery', bakerySchema);
module.exports = Bakery;
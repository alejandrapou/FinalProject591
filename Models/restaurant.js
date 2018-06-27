const mongoose = require('mongoose');
if (!mongoose.connection.db){
    mongoose.connect('mongodb://localhost/CS591');
}

const db = mongoose.connection;
const Schema = mongoose.Schema;
const destination = new Schema({
    name: String,
    nameRestaurant: String,
    phone: String
})


const Destination = mongoose.model('Destination', destination);

module.exports = Destination;
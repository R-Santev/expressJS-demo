const mongoose = require('mongoose');

const accessoryScheme = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
});

module.exports = mongoose.model('Accessory', accessoryScheme);

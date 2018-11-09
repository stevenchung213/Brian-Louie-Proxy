const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://admin1:admin1password@cluster0-ytvdt.mongodb.net/gallery?retryWrites=true';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;

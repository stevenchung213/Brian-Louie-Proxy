const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin1:<PASSWORD>@cluster0-oo5uv.mongodb.net/admin';

const db = mongoose.connect(
  uri,
  { useNewUrlParser: true },
);

module.exports = db;

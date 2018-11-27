// const mongoose = require('mongoose');
require('newrelic');
const cors = require('cors');
const express = require('express');
// const graphqlHTTP = require('express-graphql');
const path = require('path');
// const schema = require('./schema.js');
const bodyParser = require('body-parser');

const port = 8081;

const app = express();

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   'mongodb+srv://admin1:admin1password@cluster0-ytvdt.mongodb.net/houses?retryWrites=true/',
//   { useNewUrlParser: true },
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(`${__dirname}/../public`));

app.get('/listings', (req, res) => {
  let getDbData = (callback) => {
    overview.find({}, (err, docs) => {
      if (err) {
        console.log('ERROR ERROR ERROR');
        callback(err, null);
      }
      console.log('GET REQUEST SERVED');
      callback(docs);
    });
  };
  getDbData(result => {
    console.log('sending db results');
    res.status(200).send(result);
  });
});

app.get('/:propertyID', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.get('/listings/:propertyID', (req, res) => {
  overview.find({propertyID: req.params.propertyID}).exec()
    .then(result => res.status(200).send(result))
    .catch(err => console.log('ERROR \n', err));
});

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   }),
// );

app.listen(port, () => console.log(
  `Express Server Now Running On localhost:${port}`,
));

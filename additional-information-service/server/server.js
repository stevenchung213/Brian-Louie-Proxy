require('newrelic');
// const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
// const graphqlHTTP = require('express-graphql');
const path = require('path');
// const schema = require('./schema.js');
const pg = require('pg');
// const {connection, db} = require('./database/pg.js');
const port = 8081;
const bodyParser = require('body-parser');

// connection string
const connection = "postgres://postgres:102884@localhost:5432/sdc";
// new connection
const db = new pg.Client(connection);


const app = express();

db.connect();
// mongoose.Promise = global.Promise;
// mongoose.connect(
//   'mongodb+srv://admin1:admin1password@cluster0-ytvdt.mongodb.net/houses?retryWrites=true/',
//   { useNewUrlParser: true },
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(`${__dirname}/../public`));

app.get('/:propertyID', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.get('/listings/:propertyID', (req, res) => {
  const id = req.params.propertyID;
  const result = [];

  const query = client.query(`SELECT * FROM zillwoah WHERE propertyid = ${id}`);

  db.query(query)
    .then(res => {
      console.log(res);
    })


  // db.connect( (err, client, done) => {
  //
  //   if (err) {
  //     done();
  //     console.log(err);
  //     return res.status(500).json({success: false, data: err});
  //   }
  //

  //
  //   query.on('row', (row) => {
  //     console.log('row ', row);
  //     result.push(row);
  //     console.log('result ', result)
  //   });
  //
  //   query.on('end', () => {
  //     done();
  //     return res.json(result);
  //   });
  // });

//   overview.find({propertyID: req.params.propertyID}).exec()
//     .then(result => res.status(200).send(result))
//     .catch(err => console.log('ERROR \n', err));
});

app.get('/listings', (req, res) => {
  const id = Math.round(Math.random()*10000000);
  const result = [];

  db.connect(connection, (err, client, done) => {

    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    const query = client.query(`SELECT * FROM zillwoah WHERE propertyid = ${id}`);

    query.on('row', (row) => {
      result.push(row);
    });

    query.on('end', () => {
      done();
      return res.json(result);
    });
  });

  // let getDbData = (callback) => {
  //   overview.find({}, (err, docs) => {
  //     if (err) {
  //       console.log('ERROR ERROR ERROR');
  //       callback(err, null);
  //     }
  //     console.log('GET REQUEST SERVED');
  //     callback(docs);
  //   });
  // };
  // getDbData(result => {
  //   console.log('sending db results');
  //   res.status(200).send(result);
  // });
});

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   }),
// );

app.listen(port, () => console.log(
  `Express Server Now Running On localhost:${port}/`,
));

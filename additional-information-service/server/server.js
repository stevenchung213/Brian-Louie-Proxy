require('newrelic');
// const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
// const graphqlHTTP = require('express-graphql');
const path = require('path');
// const schema = require('./schema.js');
const pg = require('pg');

const compression = require('compression');

const port = 8081;
const bodyParser = require('body-parser');

const app = express();

// connection string
// const connection = "postgres://postgres:102884@localhost:5432/sdc";

// const config = {
//   user: 'postgres',
//   database: 'sdc',
//   password: '102884',
//   port: 5432
// };

const config = {
  user: 'postgres',
  host: 'ec2-54-193-4-249.us-west-1.compute.amazonaws.com',
  database: 'sdc',
  password: '',
  port: 5432
};

const pool = new pg.Pool(config);

// new connection
// const db = new pg.Client(connection);
// db.connect();


// app.use(compression());
// app.use(compression({
//   level: 9,               // set compression level from 1 to 9 (6 by default)
//   filter: shouldCompress, // set predicate to determine whether to compress
// }));
//
// function shouldCompress (req, res) {
//   if (req.headers["x-no-compression"]) return false;
//   return compression.filter(req, res);
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



// app.use(express.static("public"));
app.use(express.static(`${__dirname}/../public`));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/:propertyID', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
  // res.sendFile(path.resolve("public", "index.html"));
});


app.get('/listings/:propertyID', (req, res) => {
  const id = req.params.propertyID;
  const select =`SELECT * FROM zillwoah WHERE propertyid = ${id}`;

  pool.connect( (err, client, done) => {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    client.query(select, (err, result) => {
      done();
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      console.log('Postgres query return = ', result);
      res.status(200).send(result.rows)
    });
  });
});

app.get('/listings', (req, res) => {
  const id = Math.round(Math.random()*10000000);
  const select =`SELECT * FROM zillwoah WHERE propertyid = ${id}`;

  pool.connect( (err, client, done) => {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    client.query(select, (err, result) => {
      done();
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      console.log('Postgres query return = ', result);
      res.status(200).send(result.rows)
    });
  });
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

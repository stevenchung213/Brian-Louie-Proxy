const seed = require('data-seed.js');
const cassandra = require('express-cassandra');
// cass = models
const models = cassandra.createClient({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: { port: 9042 },
    keyspace: 'sdc',
    queryOptions: { consistency: cassandra.consistencies.one },
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1,
    },
    migration: 'safe',
  },
});


const Model = models.loadSchema('zillwoah', {
  fields: {
    propertyid: 'int',
    address: 'text',
    zip: 'int',
    beds: 'decimal',
    baths: 'decimal',
    sqft: 'decimal',
    status: 'text'
  },
  key: ['propertyid'],
});


Model.syncDB((err, result) => {
  if (err) {
    console.error(err);
  }
  console.log('schema was changed', result);
});


const cassSeed = (seed) => {
  let result = [];
  for (let i = 0; i < 10000000; i++) {

  }
};




// models.instance.schema.execute_query();





// // POSTGRES
// //
// // const { Pool } = require('pg');  // non local host
// const pg = require('pg');
// // connection string
// const connection = "postgres://postgres:102884@localhost:5432/sdc";
// // new connection
// const db = new pg.Client(connection);
//
// // connect
// db.connect();


// const sdc =
//   `CREATE TABLE IF NOT EXISTS zillwoah (
//
//     propertyid int,
//     address varchar(84),
//     city varchar(28),
//     zip integer,
//     beds decimal,
//     baths decimal,
//     sqft decimal,
//     status varchar(10)
//
// )`;

// db.query(sdc)
//   .then(res => {
//     console.log(res);
//     db.end();
//   })
//   .catch(err => {
//     console.log(err);
//     db.end()
//   });


// const csvSeed = `COPY zillwoah FROM 'C:\\my.csv' WITH (FORMAT CSV);`;
//
// console.time();
//
// db.query(csvSeed)
//   .then(res => {
//     console.log(res);
//     console.timeEnd();
//     db.end();
//   })
//   .catch(err => {
//     console.log(err);
//     console.timeEnd();
//     db.end();
//   });
//
//

const indexing = `CREATE INDEX propertyid ON zillwoah;`;

const find = `SELECT * `

// module.exports = db;



// const mongoose = require('mongoose');
//
// const uri = 'mongodb+srv://admin1:admin1password@cluster0-ytvdt.mongodb.net/houses?retryWrites=true/';
//
// const db = mongoose.connect(
//   uri,
//   { useNewUrlParser: true },
// );
//
// module.exports = db;

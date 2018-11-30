// const { Pool } = require('pg');  // non local host
const pg = require('pg');
// connection string
const connection = "postgres://postgres:102884@localhost:5432/sdc";
// new connection
const db = new pg.Client(connection);

// connect
db.connect();


const sdc =
  `CREATE TABLE IF NOT EXISTS zillwoah (

    propertyid bigint PRIMARY KEY,
    downpayment bigint,
    hoa int,
    price bigint,
    propertytaxpercent decimal,
    propertytaxx bigint
    
)`;

const create = () => {
  console.time('create');
  db.query(sdc)
    .then(res => {
      console.log(res);
      db.end();
    })
    .catch(err => {
      console.log(err);
      db.end()
    });
  console.timeEnd('create');
};

const csvSeed = `COPY zillwoah FROM 'C:\\seed.csv' WITH (FORMAT CSV);`;

const seed = () => {
  console.time('seed');
  db.query(csvSeed)
    .then(res => {
      console.log(res);
      db.end();
    })
    .catch(err => {
      console.log(err);
      db.end();
    });
  console.timeEnd('seed');
};

const indexing = `CREATE UNIQUE INDEX propertyid_idx ON zillwoah (propertyid);`;

const index = () => {
  console.time('index');
  db.query(indexing)
    .then(res => {
      console.log(res);
      db.end();
    })
    .catch(err => {
      console.log(err);
      db.end();
    });
  console.timeEnd('index');
};


create();
// seed();
// index();

module.exports.db = db;
module.exports.connection = connection;
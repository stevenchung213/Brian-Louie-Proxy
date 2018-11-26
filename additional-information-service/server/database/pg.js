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
    address varchar(84),
    baths decimal,
    beds decimal,
    city varchar(28),
    sqft decimal,
    status varchar(10),
    zip int
    
)`;

const create = () => {
  console.time();
  db.query(sdc)
    .then(res => {
      console.log(res);
      db.end();
    })
    .catch(err => {
      console.log(err);
      db.end()
    });
  console.timeEnd();
};

const csvSeed = `COPY zillwoah FROM 'C:\\pg.csv' WITH (FORMAT CSV);`;

const seed = () => {
  console.time();
  db.query(csvSeed)
    .then(res => {
      console.log(res);
      db.end();
    })
    .catch(err => {
      console.log(err);
      db.end();
    });
  console.timeEnd();
};

const indexing = `CREATE UNIQUE INDEX propertyid_idx ON zillwoah (propertyid);`;

const index = () => {
  console.time();
  db.query(indexing)
    .then(res => {
      console.log(res);
      db.end();
    })
    .catch(err => {
      console.log(err);
      db.end();
    });
  console.timeEnd();
};


// create();
// seed();
index();
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


create();
// seed();
// index();

module.exports.db = db;
module.exports.connection = connection;

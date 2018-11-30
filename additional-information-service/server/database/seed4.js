// const { Pool } = require('pg');  // non local host
const pg = require('pg');
// connection string
const connection = "postgres://postgres@localhost:5432/sdc";
// new connection
const db = new pg.Client(connection);

// connect
db.connect();


const csvSeed = `COPY zillwoah FROM '/home/ubuntu/sdc/additional-information-service/server/database/seed4.csv' WITH (FORMAT CSV);`;

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

seed();

module.exports.db = db;
module.exports.connection = connection;

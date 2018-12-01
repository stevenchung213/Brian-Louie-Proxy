// const { Pool } = require('pg');  // non local host
const pg = require('pg');
// connection string
const connection = "postgres://postgres@localhost:5432/sdc";
// new connection
const db = new pg.Client(connection);

// connect
db.connect();


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


// create();
// seed();
index();

module.exports.db = db;
module.exports.connection = connection;

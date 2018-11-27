// const cassandra = require('cassandra-driver');
// const async = require('async');
// const seed = require('./data-seed.js');
// const distance = cassandra.types.distance;
// // const loadBalancing = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy('local');
// const client = new cassandra.Client({
//   contactPoints: ['127.0.0.1'],
//   localDataCenter: 'datacenter1',
//   // pooling: {
//   //   coreConnectionsPerHost: {
//   //     [distance.local]: 1
//   //   }
//   // },
//   // policies: {
//   //   loadBalancing: loadBalancing
//   // }
// });
//
//
// client.connect()
//   .then(() => {
//     const createKS = "CREATE KEYSPACE IF NOT EXISTS sdc WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' }";
//     return client.execute(createKS);
//   })
//   .then(() => {
//     const createTable = "CREATE TABLE IF NOT EXISTS sdc.zillwoah ( propertyid int PRIMARY KEY, address text, city text, zip int, beds" +
//       " decimal," +
//       " baths decimal," +
//       " sqft decimal, status text )";
//     return client.execute(createTable);
//   })
//   // .then(() => {
//   //   const insert = 'INSERT INTO sdc.zillwoah (propertyid, address, city, zip, beds, baths, sqft, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
//   //   for (let i = 0; i < 10000; i++) {
//   //     client.execute(insert, Object.values(seed[i]), {prepare: true});
//   //   }
//   // })
//   .then(() => {
//     const test = 'SELECT * from sdc.zillwoah WHERE propertyid = ?';
//     return client.execute(test, [10000], {prepare: true});
//   })
//   .then(result => {
//     const row = result.first();
//     console.log('Retrieved row: %j', row);
//     return client.shutdown();
//   })
//   .catch(err => {
//     console.error('There was an error', err);
//     return client.shutdown().then(() => { throw err; });
//   });
//
//
//
// // EXPRESS-CASSANDRA
// //
// // client.connect((err, res) => {
// //   if (err) { console.log(err) }
// //   console.log('connected to cassandra db ' + res);
// // });
// //
// // client.execute(createType)
// //   .then(() => {
// //     console.log('ks created');
// //   })
// //   .catch(err => { console.log(err) });
//
// // .then(() => client.execute(createKS))
// // .then(() => client.execute("USE sdc"))
// // .then(() => client.execute(createType))
// // .catch(err => console.log(err));
// //
//
//
// // const seed = require('./data-seed.js');
// // const cassandra = require('express-cassandra');
// // // cass = models
// // const models = cassandra.createClient({
// //   clientOptions: {
// //     contactPoints: ['127.0.0.1'],
// //     protocolOptions: { port: 9042 },
// //     keyspace: 'sdc',
// //     queryOptions: { consistency: cassandra.consistencies.one },
// //   },
// //   ormOptions: {
// //     defaultReplicationStrategy: {
// //       class: 'SimpleStrategy',
// //       replication_factor: 1,
// //     },
// //     migration: 'safe',
// //   },
// // });
// //
// //
// // const Model = models.loadSchema('zillwoah', {
// //   fields: {
// //     propertyid: 'int',
// //     address: 'text',
// //     zip: 'int',
// //     beds: 'decimal',
// //     baths: 'decimal',
// //     sqft: 'decimal',
// //     status: 'text'
// //   },
// //   key: ['propertyid'],
// // });
// //
// //
// // Model.syncDB((err, result) => {
// //   if (err) {
// //     console.error(err);
// //   }
// //   console.log('schema was changed', result);
// // });
//
//
//
// // const mongoose = require('mongoose');
// //
// // const uri = 'mongodb+srv://admin1:admin1password@cluster0-ytvdt.mongodb.net/houses?retryWrites=true/';
// //
// // const db = mongoose.connect(
// //   uri,
// //   { useNewUrlParser: true },
// // );
// //
// // module.exports = db;

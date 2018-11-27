const faker = require('faker');
// const mongoose = require('mongoose');
// const House = require('./House.js');
const db = require('./index.js');
const csv = require('fast-csv');
const fs = require('fs');

const random = num => Math.ceil(Math.random() * num);
const propertytax = [1.2, 1.5, 1.7, 2, 2.3, 2.7, 3];


console.time('generation');

const seedFunc = () => {
  let count = 1;
  return Array.from({length: 10000000}, () => {
    const id = count;
    count++;

    // const zestimate = zestHistory();
    return {
      propertyid: id,
      downpayment: Math.round((Math.random() * 100000) + 100000),
      hoa: Math.round((Math.random() * 1200) + 1200),
      price: Math.round((Math.random() * 500000) + 500000),
      propertytaxpercent: propertytax[Math.floor(Math.random() * propertytax.length)]

      // propertyid: id,
      // address: `'${faker.address.streetAddress()}'`,
      // baths: 2.5 + 0.5 * Math.floor(Math.random() * 3),
      // beds: 3 + Math.floor(Math.random() * 2.5),
      // city: `'${faker.address.city()}'`,
      // sqft: 1150 + 10 * random(20),
      // status: `'${statusArray[Math.floor(Math.random() * 2)]}'`,
      // zip: 98100 + random(99)
      // zestimate,
      // , taxAssessment: zestimate[zestimate.length - 1] * 0.937,
    };
  });
};


const seed = seedFunc();

console.timeEnd('generation');

console.time('writecsv');
const sdcSeed = () => {

  const csvStream = csv.createWriteStream({headers: false}),
    writableStream = fs.createWriteStream("seed.csv");

  writableStream.on("finish", () => {
    console.log('CSV DONE!');
  });

  csvStream.pipe(writableStream);

  for (let i = 0; i < 10000000; i++) {
    csvStream.write(seed[i]);
  }

  csvStream.end();
};


sdcSeed();
console.timeEnd('writecsv');

// module.exports = seed;

// const seedDatabase = () => {
//   House.create(seed)
//     .then(() => mongoose.connection.close())
//     .catch(err => console.error(err));
// };
//
// seedDatabase();

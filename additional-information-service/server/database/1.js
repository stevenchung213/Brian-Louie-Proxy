const csv = require('fast-csv');
const fs = require('fs');

const propertytax = [1.2, 1.5, 1.7, 2, 2.3, 2.7];


console.time('generation');

const seedFunc = () => {
  let count = 1;
  return Array.from({length: 1000000}, () => {
    const id = count;
    const price = Math.round((Math.random() * 500000) + 500000);
    const proptax =  propertytax[Math.floor(Math.random() * propertytax.length)];
    count++;

    return {
      propertyid: id,
      downpayment: Math.round((Math.random() * 100000) + 100000),
      hoa: Math.round((Math.random() * 1200) + 1200),
      price: price,
      propertytaxpercent: proptax,
      propertytaxx: Math.round(price * (proptax * (0.01)))

    };
  });
};


const seed = seedFunc();

console.timeEnd('generation');


const sdcSeed = () => {
  console.time('writecsv');
  const csvStream = csv.createWriteStream({headers: false}),
    writableStream = fs.createWriteStream("seed1.csv");

  writableStream.on("finish", () => {
    console.log('CSV DONE!');
  });

  csvStream.pipe(writableStream);

  for (let i = 0; i < 1000000; i++) {
    csvStream.write(seed[i]);
  }

  csvStream.end();
  console.timeEnd('writecsv');
};


sdcSeed();

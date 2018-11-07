const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
const port = 3005;

app.enable('trust proxy');
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`))
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/:houseid', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`))
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

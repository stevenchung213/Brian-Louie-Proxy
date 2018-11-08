const express = require('express');
const bodyParser = require('body-parser');
const Galleries = require('../database/Gallery.js');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../dist/'));

let port = 3002;

app.get('/:id', (req, res) => {
	console.log('hi');
	res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});

app.get('/homes/:id', (req, res) => {
	console.log('req.params.urlId is ', req.params.id)
	Galleries.find({id: req.params.id}, (err, data) => {
		console.log('data is ', data);
		if (err) {
			console.log("Error: ", err);
		} else {
			res.status(200).send(data);
		}
	})
});


app.listen(port, () => {
	console.log(`listening on port ${port}`);
});




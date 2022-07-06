const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(express.json());

// cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//import las rutas
app.use('/api/getChange', require('./routes/getChange.js'));
app.use('/api/abbreviationCoins', require('./routes/abbreviationCoins.js'));
app.use('/api/historical', require('./routes/historical.js'));

app.use(morgan('dev'));

module.exports = app
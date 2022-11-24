const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const indexRoute = require('./index/route/indexRoute');

const PORT = 8080;

var app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static('./index/view'));

app.use(indexRoute);

app.listen(PORT, () => console.log(`Server started on port ${PORT} and running on http://localhost:${PORT}`));
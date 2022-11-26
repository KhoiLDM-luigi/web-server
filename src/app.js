const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const indexRoute = require('./index/route/indexRoute');
const tableRoute = require('./table/route/tableRoute');

const PORT = 8080;

var app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.static('public'));
app.set('views', ['./index/view', './table/view', './error']);
app.set('view engine', 'hbs');

app.use('/', indexRoute);
app.use('/table', tableRoute);

app.use((req, res, next) => {
  // render the error page
  res.status(404).render("404", {title: 'not found'});
});



app.listen(PORT, () => console.log(`Server started on port ${PORT} and running on http://localhost:${PORT}`));
var express = require('express');

var app = express();

var port = process.env.PORT || 5050;
var nav = [{
	Link: '/Books',
	Text: 'Books'
			}, {
	Link: '/Authors',
	Text: 'Authors'
			}];

var bookRouter = express.Router();


app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

bookRouter = require('./src/routes/bookRoutes')(nav);

app.use('/Books', bookRouter);

app.get('/', function (req, res) {
	res.render('index', {
		title: 'Hellow from render',
		nav: nav
	})
});


app.get('/books', function (req, res) {
	res.send('hello books1234');
});

app.listen(port, function (err) {
	console.log('running server on port ' + port);
});
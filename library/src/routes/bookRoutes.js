var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {
	var books = [
		{
			title: 'Les Miserables',
			author: 'Victor Hugo'
	},
		{
			title: 'Life On The Mississippi',
			author: 'Mark Twain'
	},
		{
			title: 'Childhood',
			author: 'Lev Nikolayevich Tolstoy'
	},
		{
			title: 'The Dark World',
			author: 'Henry Kuttner'
	},
		{
			title: 'The Time Machine',
			author: 'H. G. Wells'
	}];

	bookRouter.route('/')
		.get(function (req, res) {
			res.render('bookListView', {
				title: 'Books',
				nav: nav,
				books: books
			});
		});

	bookRouter.route('/:id')
		.get(function (req, res) {
			var id = req.params.id;
			res.render('bookView', {
				title: 'Books',
				nav: nav,
				book: books[id]
			});
		});
	return bookRouter;
}

module.exports = router;
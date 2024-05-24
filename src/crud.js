const Book = require('./book');

const getBookById = (id) => {
	const book =  Book.findById(id);
	return book;
};

const getAllBooks = () => {
	const books =  Book.find();
	return books;
};

const createBook = (bookDetails) => {
	const newBook = Book.create(bookDetails);
	return newBook;
};

const removeBookById = (id) => {
	const delBook = Book.findByIdAndDelete(id);
	return delBook;
};

const updateBookById = (id, update) => {
	const updateBook = Book.findByIdAndUpdate(id,update,{new:true});
	return updateBook;
};

module.exports = {
	getBookById,
	getAllBooks,
	createBook,
	removeBookById,
	updateBookById,
};

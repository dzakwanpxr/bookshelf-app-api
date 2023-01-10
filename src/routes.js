/* eslint-disable linebreak-style */
const {
  addBook, getAllBook, getBookById, editBookById, deleteBookById,
} = require('./handler');

const routes = [
  {
    path: '/books',
    method: 'POST',
    handler: addBook,
  },
  {
    path: '/books',
    method: 'GET',
    handler: getAllBook,
  },
  {
    path: '/books/{bookId}',
    method: 'GET',
    handler: getBookById,
  },
  {
    path: '/books/{bookId}',
    method: 'PUT',
    handler: editBookById,
  },
  {
    path: '/books/{bookId}',
    method: 'DELETE',
    handler: deleteBookById,
  },
];

module.exports = routes;

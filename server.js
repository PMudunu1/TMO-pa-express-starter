
const http = require('http');
const express = require('express')


const app = express()
app.use(express.json());
const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter);

module.exports = app

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log('Server is running s on port: ' + port)
});

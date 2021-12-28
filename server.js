/*const http = require('http');
const express = require('express');
//var cors = require('cors');
const booksRouter = require('./routes/books');


const app = express();
app.use(express.json());
//app.use(cors({origin: 'http://localhost:80'}));

app.use('/books', booksRouter);


app.use('/', function(req, res) {
    res.send('Server is Up');
});

const server = http.createServer(app);
//const port = 80;

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});

server.listen(port);
console.debug('Server port ' + port);
*/

//server.js
const express = require('express')
//const path = require('path')

const app = express()
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);
//app.use(express.static(path.resolve(__dirname, 'public')));
// and all the other stuff
module.exports = app

//app.js
//const app = require('./server');
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log('Server is running s on port: ' + port)
});

const http = require('http');
require('dotenv').config();

const app = require('./app/app');

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`front end server starter at port: ${process.env.PORT}`)
});
const express = require('express');
const app = express();
const routesHandler = require ('./routes/handler');

app.use('/', routesHandler);
// app.use(express.json());
// app.use(express.urlencoded());

// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'testuser',
//     password : 'Pa55w0rd',
//     database:'voteschema'
// });

app.listen(5000, () => {
    console.log('Server is listening on Port 5000!')
})






// module.exports = connection;


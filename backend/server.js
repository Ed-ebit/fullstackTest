const express = require('express')
const app = express()
const mysql = require('mysql')
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'testuser',
    password : 'Pa55w0rd',
    database:'voteschema'
});



app.listen(3002, () => {
    console.log('Server is listening on Port 3002!')
})

module.exports = connection;
// connection.connect();
// app.get('/', (req, res) => {
// connection.query('SELECT * FROM bundeslaender where idbundeslaender = 2', function(err, rows, fields) 
// {
//   if (err) throw err;

//   console.log(rows[0]);
// //   console.log(fields[0]);
// res.send(rows[0]);
// });
// })
// connection.end();

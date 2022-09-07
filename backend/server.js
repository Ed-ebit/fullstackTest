const express = require('express')
const app = express()
const mysql = require('mysql')
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'testuser',
    password : 'Pa55w0rd',
    database:'voteschema'
});



app.listen(3002, () => {
    console.log('Server listening on Port 3002!')
})

app.get('/', (req, res) => {
    res.status(500).send('Hi')
    // connection.connect();
    console.log(connection.query(
        'SELECT * FROM voteschema.bundeslaender where idbundeslaender = 2', function(err, rows, fields)
    { if (err) console.log('Na toll!\n'+err);
    // res.send('ho');
    // connection.end();
    }))
    
})

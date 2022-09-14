const express = require ('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'testuser',
  password : 'Pa55w0rd',
  database:'voteschema'
});

router.get('/datenbankabfrage',(req, res)=> {
    connection.query('SELECT * FROM bundeslaender where idbundeslaender ='+{dropdownKey}, function(err, rows, fields) 
{
  if (err) throw err;

  console.log(rows[0]);
//   console.log(fields[0]);
res.send(rows[0]);
// res.end(JSON.stringify(str));
});
})

router.post('/addData', (req, res) => {
    res.end('Not Implemented yet!');
})

router.get('/', (req, res) => {
    res.send('Server running')
})

module.exports = router;
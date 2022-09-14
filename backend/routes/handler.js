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
    connection.query('SELECT * FROM bundeslaender where idbundeslaender = 2', function(err, rows, fields) 
{
  if (err) throw err;

  console.log(rows[0]);
//   console.log(fields[0]);
res.send(rows[0]);
// res.end(JSON.stringify(str));
});
})

router.get('/datenbankabfrage/:item',(req, res)=> {
  // console.log(req.params.item);
  // res.send(200);
   const item = req.params.item;
  console.log(item);
  connection.query('SELECT '+item+' FROM bundeslaender', function(err, rows, fields) 
{
if (err) throw err;

console.log(rows[0]);
//   console.log(fields[0]);
res.send(rows);
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
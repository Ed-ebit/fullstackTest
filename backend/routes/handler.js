const express = require ('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'testuser',
  password : 'Pa55w0rd',
  database:'voteschema'
});

router.get(`/datenbankabfrage/country-rules/:country`, (req, res) => {
  const country = req.params.country;
  connection.query(
    `SELECT idbundeslaender, bundeslaender_name, bundeslaender_regeln, anteil_der_gf_numerator, anteil_der_gf_denominator 
      FROM bundeslaender
      WHERE bundeslaender_name=?`,
    [country],
    (err, rows, fields) => {
      if(err) {throw new Error(err);}
      res.send(rows[0]);
    }
  )
})

router.get(`/datenbankabfrage/house-type-rules/:houseType`, (req, res) =>{
  const { houseType } = req.params;
  connection.query(
    `SELECT idhaustyp, haustyp_name, haustyp_laenge , haustyp_breite , haustyp_dachneigung 
      FROM haustyp 
      WHERE haustyp_name=?`, 
    [houseType], 
    (err, rows, fields) => {
      if (err) { throw new Error(err) }
      console.log(rows[0]);
      res.send(rows[0]);

    }
  );
})

router.get('/datenbankabfrage/:table/:item',(req, res)=> {
  const item = req.params.item;
  
   const table = req.params.table;
  console.log(item);
  console.log(table);
  connection.query('SELECT '+item+' FROM '+table+'', function(err, rows, fields) 
{
if (err) {console.log('Fehler SQL-Abfrage');}
else{
console.log(rows);
//   console.log(fields[0]);
res.send(rows);
// res.end(JSON.stringify(str));
}});
})

router.post('/addData', (req, res) => {
    res.end('Not Implemented yet!');
})

router.get('/', (req, res) => {
    res.send('Server running')
})

module.exports = router;
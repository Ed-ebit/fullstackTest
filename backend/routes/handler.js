const express = require ('express');
const router = express.Router;

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

router.post('/addData', (req, res) => {
    res.end('Not Implemented yet!');
})

module.exports = router;
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bp = require('body-parser')

const app = express()
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'inventory-system'
});



app.get('/asset', async function (req, res) {
    // req.body
   
    connection.query('SELECT i.*, c.name AS type FROM `item` i, `category` c WHERE i.categoryID = c.id;', function (error, results, fields) {
      if (error) throw error;
      // console.log(results);
      res.json(results) //send
    });
  
    
  })

app.post('/asset-update', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data received successfully' });
  
    const item = req.body;
    
    connection.query("UPDATE item SET name = '" +item.name+ "', description = '" +item.description+ "', brand = '" +item.brand+ "', supplier = '" +item.supplier+ "', location = '" +item.location+ "', status = '" +item.status+ "' WHERE id = '" + item.id + "'", (error, result) => {
        console.log(error)
    })
    
  });



  app.listen(5000)
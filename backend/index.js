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



  app.post('/asset-create', (req, res) => {
    const item = req.body;
  
    connection.query(
      "INSERT INTO item (name, description, brand, date_acquired, supplier, serial_no, asset_code, location, status, categoryID) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [
        item.name,
        item.description,
        item.brand,
        item.date_acquired,
        item.supplier,
        item.serial,
        item.asset_code,
        item.location,
        item.status,
        item.type,
      ],
      (error, result) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ error: 'Failed to insert data' });
        }
  
        connection.query(
          "SELECT CONCAT(c.category_code, '-', RIGHT(DATE_FORMAT(i.date_acquired, '%Y'),2), '-', LPAD(i.id, 3, '0')) AS asset_code FROM item i, category c WHERE i.categoryID = c.id ORDER BY i.id DESC LIMIT 1",
          (error, results) => {
            if (error) {
              return res.status(500).json({ error: 'Failed to execute SELECT query' });
            }
  
            if (results.length === 0) {
              return res.status(404).json({ error: 'No data found' });
            }
  
            const newAssetCode = results[0].asset_code;
  
            connection.query(
              "UPDATE item SET asset_code = ? WHERE id = ?",
              [newAssetCode, result.insertId],
              (error, updateResult) => {
                if (error) {
                  console.log(error);
                  return res.status(500).json({ error: 'Failed to update asset code' });
                }
  
                return res.json({ item });
              }
            );
          }
        );
      }
    );
  });

  
  
app.post('/asset-update', (req, res) => {
    res.json({ message: 'Data received successfully' });
  
    const item = req.body;
    
    connection.query("UPDATE item SET name = '" +item.name+ "', description = '" +item.description+ "', brand = '" +item.brand+ "', supplier = '" +item.supplier+ "', location = '" +item.location+ "', status = '" +item.status+ "' WHERE id = '" + item.id + "'", (error, result) => {
        console.log(error)
    })
    
  });



  app.listen(5000)
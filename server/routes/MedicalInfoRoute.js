const connection = require('../database/connectionDB');
const express = require("express");
const router = express.Router();
var cors = require("cors");
router.use(cors());


//para diferenciar metodos post en las comillas de debe de poner el nombre
router.post('/addMedicalInfo', function (req, res) {
  connection.query("CALL addTours('" + req.body.tourName + "','" + req.body.description +"'"+ ")", function (err,result) {
      if (err) {
        return res.send(err)
      }
      else {
        return res.send(result)
      }
    }
    )

});

router.get('/getTours', function (req, res) {
  console.log('es un get');
    connection.query("CALL getTours()", function (err,result) {
        if (err) {
          return res.send(err)
        }
        else {
          console.log(result);
          return res.send(result)
        }
      }
      )
  
  });

module.exports = router;
var express = require('express');
var router = express.Router();
var address = require('../sql/address');
var sql = require('../sql/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.find(address,{},{}).then(data=>{
    res.send(data)
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();
var goods = require('../sql/goods');
var sql = require('../sql/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.find(goods,{},{}).then(data=>{
    res.send(data)
  })
});


module.exports = router;

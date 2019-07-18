var express = require('express');
var router = express.Router();
var user = require('../sql/user');
var sql = require('../sql/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.find(user,{},{}).then(data=>{
    res.send(data)
  })
});

module.exports = router;

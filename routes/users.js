var express = require('express');
var router = express.Router();
var users = require('./../../sql/user');
var sql = require('./../../sql/index');



/* GET users listing. */
router.get('/', function (req, res, next) {
  sql.find(users, {}, { _id: 0 }).then((data) => {
    res.render('users', {
      data: data,
      aindex: 2
    });
  })
});

// 编辑用户信息
router.get('/updateUser', function (req, res, next) {
  // res.send(req.query);
  sql.find(users, req.query, { _id: 0 }).then((data) => {

    // res.send(data);
    res.render('updateUser',{
      username: data[0].username ,
      password: data[0].password ,
      age: data[0].age ,
      sex: data[0].sex ,
      city: data[0].city ,
      like: data[0].like ,
      lesson: data[0].lesson ,

      aindex: 2
    });
  })
});
// 提交修改数据
router.post('/update', function (req, res, next) {
  
  let { username } = req.body;
  res.send(req.body);
  sql.update(users, {username: username} , req.body ).then(() => {
    // even.preventDefaulf();
    // res.send(data);
    res.redirect('users');
  })
});



module.exports = router;

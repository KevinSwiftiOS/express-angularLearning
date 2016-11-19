var express = require('express');
var router = express.Router();
/* GET users listing. */

var models = require('./models');
var User = models.User;
//链接本地的数据库
router.post("/", function(req, res,next) {
var username = req.query["username"];
var password = req.query["password"];
  User.find({username:username}).exec(function (err,data) {
      if(err){
          res.send({success:0});
      }else if(data.length == 0)
          res.send({success:0});
      else
          res.send({success:1,data:data});

  })

});
module.exports = router;

var express = require('express');
var router = express.Router();
/* GET users listing. */

var models = require('./models');
var User = models.User;
//链接本地的数据库

router.post("/", function(req, res,next) {
//注册的
    var username = req.query["username"];
    var password = req.query["password"];
    var mobile = req.query["mobile"];
    var user = new User({
        username:username,
        name:"",
        password:password,
        mobile:mobile,
        cardTye:"",
        cardId:"",
        email:"",
    });

    user.save(function (err,data) {
        if(err){
            res.send({success:0});
        }else{
            res.send({success:1});
        }
    })

});
module.exports = router;

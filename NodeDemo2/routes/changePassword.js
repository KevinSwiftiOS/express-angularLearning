var express = require('express');
var router = express.Router();
/* GET users listing. */

var models = require('./../dbs/models');
var User = models.User;
//链接本地的数据库

router.post("/", function(req, res,next) {
//修改密码的
    var username = req.query["username"];
    var oldpassword = req.query["oldpassword"];
    var newpassword = req.query["newpassword"];
    var conditon = {username:username,password:oldpassword};
    var update = {$set:{password:newpassword}};
    User.update(conditon,update).exec(function (err,data) {
        if(err){
            res.send({success:0});
        }else{
            res.send({success:1,data:data[0]});
        }
    })

});
module.exports = router;
/**
 * Created by hcnucai on 2016/11/20.
 */

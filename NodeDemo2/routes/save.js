
var express = require('express');
var router = express.Router();
var models = require('./../dbs/models');
var User = models.User;
//保存个人信息的
/* GET users listing. */
router.post("/", function(req, res,next) {

var username = req.query["username"];
var name = req.query["name"];
var cardType = req.query["cardType"];
var cardId = req.query["cardId"];
var email = req.query["email"];
var tel = req.query["tel"];
var conditon = {username:username};
var update = {$set:{name:name,cardTye:cardType,cardId:cardId,email:email,mobile:tel}};
User.update(conditon,update).exec(function (err,data) {
    if(err){
        res.send({success:0});
    }else{
        res.send({success:1,data:data[0]});
    }
})

});
module.exports = router;


var express = require('express');
var router = express.Router();


/* GET home page. */
var models = require('./../dbs/models');
var User = models.User;
router.get('/', function(req, res, next) {
    var user = new User({
        mobile: "1",
        name: "曹凯强",
        password: "1",

    })
    // var update = {$set:{age:16}};
    // User.find({username:"123456",password:"123456"},{username:1,mobile:1,_id:0}).exec(function (err,data) {
    //     console.log(data);
    //     if(err){
    //         res.send({success:0});
    //     }else if(data.length == 0)
    //         res.send({success:0});
    //     else
    //         res.send({success:1,data:data});
    //
    // })

});


module.exports = router;
module.exports.getIndex1 = function () {
  return index1;
}
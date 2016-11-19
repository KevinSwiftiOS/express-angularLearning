var express = require('express');
var router = express.Router();



/* GET home page. */
var models = require('./models');
var User = models.User;
router.get('/', function(req, res, next) {
    var user = new User({
        mobile: "1",
        name: "曹凯强",
        password: "1",

    })
// user.save(function (err) {
//     if(err)
//         res.send("cuo");
//     else
//         res.send("ccc");
// })
  User.find({name:"曹凯强"}).exec(function (err,data) {
     if(data.length == 0){
         res.send("null")
     }
     var aUser = data[0];
      aUser.password = "333";
      aUser.save(function (err,data) {
          if(err){
              res.send("err");
          }else{
              res.send("update");
          }
      })
  })
});


module.exports = router;
module.exports.getIndex1 = function () {
  return index1;
}
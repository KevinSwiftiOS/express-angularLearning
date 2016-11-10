var express = require('express');
var router = express.Router();
var index = require("./index");
//加密的部分
var crypto = require("crypto");
var authtoken = require("./Authtoken");
/* GET users listing. */

router.post("/", function(req, res,next) {
//随便生成一个登录令牌 取到名字后进行moongo查询 随后就可以进行传回
    var name = req.query["name"];
    console.log(name);
    var dic = {name:name};
    res.send(dic);
});
router.get("/value",function (req,res,next) {

})
module.exports = router;

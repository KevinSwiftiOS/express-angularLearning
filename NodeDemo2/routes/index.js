var express = require('express');
var router = express.Router();
var authtoken = require("./Authtoken");
/* GET home page. */
var index1 = "caoka";
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

 authtoken.setAuthtoken("kdsnckdjbflvdjhl");
});

module.exports = router;
module.exports.getIndex1 = function () {
  return index1;
}
/**
 * Created by hcnucai on 2016/11/20.
 */
var mongoose = require("mongoose");
//进行数据库的链接 这里暂不管是生产环境还是调式环境
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TicketProject");
var db = mongoose.connection;
db.on("error",function (err) {
    console.err(err);
})
module.exports = mongoose;
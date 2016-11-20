/**
 * Created by hcnucai on 2016/11/19.
 */
var mongoose = require("./db");
var Schema =  mongoose.Schema;
var user = new Schema({
    //定义字段
    username:{type:String,unique:true, required: true},
    name:String,
    password:String,
    mobile:String,
    cardTye:String,
    cardId:String,
    email:String,
});

exports.User = mongoose.model("User", user);
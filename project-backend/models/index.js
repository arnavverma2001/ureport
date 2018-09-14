const mongoose = require("mongoose")

mongoose.set('debug', true);
mongoose.Promise = Promise
mongoose.connect("mongodb://usern:pswrd@ds251022.mlab.com:51022/srchacks")

module.exports.User = require("./user")

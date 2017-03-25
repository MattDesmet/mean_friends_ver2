var mongoose = require('mongoose');
var Schema = mongoose.Schema
var UserSchema = new Schema({
  first_name:{type:String, required:true},
  last_name:{type:String},
  birthday:{type:String}
});
mongoose.model('User',UserSchema);

// console.log('This is output of mongoose schema file',mongoose.model());
// console.log('This is output of mongoose schema file with params',mongoose.model('User',UserSchema));
console.log('1. server side USER model is working');

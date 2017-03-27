var mongoose = require('mongoose');
var User = mongoose.model('User')
module.exports = (function(){
    return{
      add: function(request,response){
        var user = new User(request.body)
        user.save(function(err,data){
          if(err){
            console.log(err)
          }
          else{
            response.json(data)
          }
        })
      },
      getAll: function(request,response){
        User.find({}, function(err,data){
          response.json(data)
          })
      },
      delete: function(request,response){
        User.remove({_id: request.params.id}, function(err){
          response.json({status: 'true'})
          })
      },
      change: function(request,response){
        console.log('this is request body object', request.body);
        User.findOne({_id: request.body._id}, function(err,user){
          user.first_name = request.body.first_name
          user.last_name = request.body.last_name
            user.birthday = request.body.birthday
            user.save(function(err,user){
              response.json(user)
          })
        })
      }
    }
})()

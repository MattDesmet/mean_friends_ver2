app.factory('loginFactory',function(){
  var factory = {};
  factory.login = function(user){
    console.log(user, 'in factory')
  }
  return factory
})

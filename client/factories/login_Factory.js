app.factory('login_Factory',function($location){
  var factory = {};
  factory.login = function(user){
    console.log(user, 'in factory')
    $location.url('/dashboard')
  }
  return factory
})

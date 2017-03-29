app.factory('user_Factory', function($http, $location, $route){
  var factory = {}
    factory.getAll = function(callback){
      $http.get('/users/getall').then(function(output){
        callback(output.data)
        })
    }
    factory.add = function(user){ //user that is passed is $scope.newUser object data
      console.log(user);
      $http.post('/users/add',user).then(function(output){ // post route reaches route.js /users/add and passes the user var which is the scope object.
        $location.url('/dashboard')
        })
    }
    factory.delete = function(id){
      $http.get('/users/delete/' + id).then(function(){
        $route.reload()
        })
    }
    factory.show = function(id){
      $location.url('/show/' + id)
    }
    factory.update = function(id){
      $location.url('/update/' +id)
    }
    factory.change = function(user){
      console.log('this is the USER data in USER factory', user);
      $http.post('/users/change',user).then(function(){
        $location.url('/dashboard')
      })
    }
    return factory;
  })

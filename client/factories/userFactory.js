app.factory('userFactory', function($http, $location, $route){
  var factory = {}
    factory.getAll = function(callback){
      $http.get('/users/getall').then(function(output){
        callback(output.data)
        })
    }
    factory.add = function(user){
      $http.post('/users/add',user).then(function(output){
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
        $location.url('/show')
      })
    }
    return factory;
  })

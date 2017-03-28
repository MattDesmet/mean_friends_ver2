app.controller('user_Controller', function($scope, user_Factory, $routeParams){
        if($routeParams.id){
          user_Factory.getAll(function(data){
            $scope.users = data
            for(user in $scope.users){
              if($scope.users[user]['_id'] == $routeParams.id){
                $scope.cur_user = $scope.users[user]
                console.log($scope.cur_user)
              }
            }
          })
        }
        else{
          user_Factory.getAll(function(data){
            $scope.users = data
            })
        }
        $scope.add = function(){
          user_Factory.add($scope.newUser)
        }
        $scope.delete = function(id){
          user_Factory.delete(id)
        }
        $scope.show = function(id){
          user_Factory.show(id)
        }
        $scope.update = function(id){
          user_Factory.update(id)
        }
        $scope.change = function(){
          console.log($scope.cur_user);
          user_Factory.change($scope.cur_user)// don't pass ID but the entire user object of info.
        }
    })

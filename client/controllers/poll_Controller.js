app.controller('poll_Controller', function($scope, poll_Factory, $routeParams) {
  if($routeParams.id){
    userFactory.getAll(function(data){
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
    userFactory.getAll(function(data){
      $scope.users = data
      })
  }
  $scope.add = function(){
    userFactory.add($scope.newUser)
  }
  $scope.delete = function(id){
    userFactory.delete(id)
  }
  $scope.show = function(id){
    userFactory.show(id)
  }
  $scope.update = function(id){
    userFactory.update(id)
  }
  $scope.change = function(){
    console.log($scope.cur_user);
    userFactory.change($scope.cur_user)// don't pass ID but the entire user object of info.
  }
})








// OLD CODE //

  //   $scope.errors = [];
  //   $scope.add = function(){
  //     // console.log($scope.newPoll.topic);
  //     // console.log($scope.newPoll.option1);
  //     $scope.errors = []
  //     if($scope.newPoll.topic.length <1 ){
  //       $scope.errors.push("Please enter a topic")
  //     }
  //     else if($scope.newPoll.option1.length < 1){
  //       $scope.errors.push("Option field cannot be blank")
  //     }else{
  //       poll_Factory.add($scope.newPoll)
  //     }
  //   }
  // })

//   $scope.login = function(){
//     console.log($scope.login_info);
//     console.log('This is the username: ', $scope.login_info.username);
//     console.log('This is the password: ', $scope.login_info.password);
//     var CurrentUser = $scope.login_info.username
//     console.log('This is current user: ',CurrentUser);
//     loginFactory.login($scope.login_info);
//   }
// })

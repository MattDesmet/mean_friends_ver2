app.controller('login_Controller', function($scope, login_Factory) {
  $scope.errors = [];
  $scope.login = function(){
    $scope.errors = []
    if(!$scope.login_info || !$scope.login_info.username){
      $scope.errors.push("Please enter a name")
    }
    if($scope.login_info.username.length < 3){
      $scope.errors.push("Name must be at least 3 characters long")
    }
    if($scope.login_info.password.length < 1){
      $scope.errors.push("please enter a password")
    }else{
      login_Factory.login($scope.login_info)
    }
  }
})














//   $scope.login = function(){
//     console.log($scope.login_info);
//     console.log('This is the username: ', $scope.login_info.username);
//     console.log('This is the password: ', $scope.login_info.password);
//     var CurrentUser = $scope.login_info.username
//     console.log('This is current user: ',CurrentUser);
//     loginFactory.login($scope.login_info);
//   }
// })

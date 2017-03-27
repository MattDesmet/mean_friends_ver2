var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
$routeProvider
  .when('/dashboard',{
    templateUrl: 'partials/dashboard.html'
    // controller:
    // controllerAs:
  })
  .when('/',{
    templateUrl: 'partials/login.html'
  })
  .when('/new',{
    templateUrl: 'partials/new.html'
  })
  .when('/show/:id',{
    templateUrl: 'partials/show.html'
    })
  .when('/update/:id',{
    templateUrl: 'partials/update.html'
    })
  .when('/users/add',{
    templateUrl: 'partials/new.html'
  })
  .when('/users/delete/',{
    templateUrl: 'partials/dashboard.html'
  })
  .when('/new2',{
    templateUrl: 'partials/new2.html'
  })
  .when('/login_boot',{
    templateUrl: 'partials/login_boot.html'
  })
  .otherwise({
    redirectTo: '/dashboard'
  });
});

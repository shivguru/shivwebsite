var app=angular.module('projects',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/projectlist',{
                templateUrl: 'projectlist.html'
          })
          .when('/npp',{
                templateUrl: 'npp.html'
          })
          .when('/ctool',{
                templateUrl: 'ctool.html'
          })
          .otherwise({
                    redirectTo: '/projectlist'
                });
});
define(['angular'], function(angular){
   angular
   .module('routes', ['ngRoute'])
   .config(function($routeProvider){
       $routeProvider
       .when('/hello',{
           template: '<div>this is demo</div>'
       })
       .otherwise({
          redirectTo: '/' 
       });
   }); 
});
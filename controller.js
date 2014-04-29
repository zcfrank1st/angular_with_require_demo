define(['angular'], function(angular){
    angular
        .module('controllers', [])
        .controller('myController', function($scope){
            $scope.hello = "demodemo";
        });
});
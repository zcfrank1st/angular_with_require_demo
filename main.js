require.config({
    paths: {
        'angular': './lib/js/angular/angular',
        'angular-route': './lib/js/angular/angular-route.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': ['angular']
    }
});

require([
    'angular',
    'angular-route',
    'app',
    'router',
    'controller'
], function(angular){
    angular.bootstrap(document, ['myApp']);
});

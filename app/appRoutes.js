;(function() {
    angular
        .module('dashboard')
        .config(function($routeProvider) {
            $routeProvider.otherwise('/');
        });
})();

;(function() {

    function DashboardService($http) {
        this.getData = function() {
            return $http({
                method: 'GET',
                url: 'http://cache.usabilla.com/example/apidemo.json'
            }).then(function(module) {
                return module;
            });
        };
    }

    angular
        .module('dashboard.dashboard')
        .service('DashboardService', DashboardService);
})();
;(function() {

    function dashboardService($http, SERVICE_URL) {
        this.getData = function() {
            return $http({
                method: 'GET',
                url: SERVICE_URL
            });
        };
    }

    angular
        .module('dashboard.dashboard')
        .constant('SERVICE_URL', 'http://cache.usabilla.com/example/apidemo.json')
        .service('dashboardService', dashboardService);
})();
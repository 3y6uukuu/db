;(function() {

    angular
        .module('dashboard.dashboard')
        .config(function($routeProvider) {
            var routeConfig = {
                controller: 'DashboardController',
                controllerAs: 'dashboardCtrl',
                templateUrl: 'components/dashboard/dashboard.view.html',
                resolve: {
                    store: function(dashboardService) {
                        return dashboardService.getData();
                    }
                }
            };

            $routeProvider.when('/', routeConfig);
        });
})();
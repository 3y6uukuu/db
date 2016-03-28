;(function() {

    function DashboardController($scope, store) {
        $scope.items = store.data.items;
    }

    angular
        .module('dashboard.dashboard')
        .controller('DashboardController', DashboardController);
})();
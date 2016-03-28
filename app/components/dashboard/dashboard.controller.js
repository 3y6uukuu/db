;(function() {

    function DashboardController(store) {
        this.items = store.data.items;
    }

    angular
        .module('dashboard.dashboard')
        .controller('DashboardController', DashboardController);
})();
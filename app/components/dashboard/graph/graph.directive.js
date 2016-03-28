;(function() {

    function graphDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/dashboard/graph/graph.view.html',
            controller: 'GraphController',
            controllerAs: 'graphCtrl',
            bindToController: true,
            scope: {
                scopedItems: '=items'
            }
        };
    }

    angular
        .module('dashboard.graph')
        .directive('graph', graphDirective);
})();
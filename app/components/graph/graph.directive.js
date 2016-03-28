;(function() {

    function graphDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/graph/graph.view.html',
            controller: 'GraphController',
            controllerAs: 'graphCtrl',
            bindToController: true
        };
    }

    angular
        .module('dashboard.graph')
        .directive('graph', graphDirective);
})();
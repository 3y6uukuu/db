;(function() {

    function GraphController($scope, graphService) {
        this.service = graphService;

        var items = $scope.items;

        items = this.service.sortByCreationDate(items);
        
        var groupedByDay = this.service.groupeByDay(items);

        this.data = {
            xAxisLabels: [],
            yAxisLabels: [[]]
        };

        this.service.prepareData(this.data, groupedByDay);
    }

    angular
        .module('dashboard.graph')
        .controller('GraphController', GraphController);
})();


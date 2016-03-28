;(function() {

    function GraphController($scope, GraphService) {
        this.service = GraphService;

        this.data = {
            items: $scope.items,
            xAxisLabels: [],
            yAxisLabels: [[]]
        };

        this.data.items = this.service.sortByCreationDate(this.data);
        
        var groupedByDay = this.service.groupeByDay(this.data); 

        this.service.prepareData(this.data, groupedByDay);
    }

    angular
        .module('dashboard.graph')
        .controller('GraphController', GraphController);
})();
;(function() {

    function FeedbackDetailsController($scope, FeedbackDetailsService) {
        this.service = FeedbackDetailsService;

        this.data = {
            items:  $scope.items,
            tableItems: $scope.items
        };

        this.data.filterItems = this.service.prepareFilterData(this.data);

        this.applyFilter = function(value) {
            this.service.toggleFilter(this.data, value);
            this.service.toggleTable(this.data);
        };
    }

    angular
        .module('dashboard.feedbackDetails')
        .controller('FeedbackDetailsController', FeedbackDetailsController);
})();
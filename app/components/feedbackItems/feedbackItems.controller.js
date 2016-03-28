;(function() {

    function FeedbackItemsController($scope, FeedbackItemsService) {
        this.service = FeedbackItemsService;

        this.data = {
            items: $scope.items
        };

        this.data.feedbackItems = this.service.prepareFeedbackItems(this.data);
    }

    angular
        .module('dashboard.feedbackItems')
        .controller('FeedbackItemsController', FeedbackItemsController);
})();
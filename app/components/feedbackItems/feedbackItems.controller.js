;(function() {

    function FeedbackItemsController($scope, FeedbackItemsService) {
        this.service = FeedbackItemsService;

        var items = $scope.items;

        this.data = {
            feedbackItems: this.service.prepareFeedbackItems(items)
        };
    }

    angular
        .module('dashboard.feedbackItems')
        .controller('FeedbackItemsController', FeedbackItemsController);
})();
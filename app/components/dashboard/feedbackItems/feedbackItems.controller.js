;(function() {

    function FeedbackItemsController(FeedbackItemsService) {
        this.service = FeedbackItemsService;

        var items = this.scopedItems;

        this.data = {
            feedbackItems: this.service.prepareFeedbackItems(items)
        };
    }

    angular
        .module('dashboard.feedbackItems')
        .controller('FeedbackItemsController', FeedbackItemsController);
})();
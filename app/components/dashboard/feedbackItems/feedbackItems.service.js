;(function() {

    function FeedbackItemsService(_) {
        this.prepareFeedbackItems = function(items) {
            return _.countBy(items, 'rating');
        };
    }

    angular
        .module('dashboard.feedbackItems')
        .service('FeedbackItemsService', FeedbackItemsService);
})();
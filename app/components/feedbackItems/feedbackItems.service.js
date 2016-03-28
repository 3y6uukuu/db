;(function() {

    function FeedbackItemsService(_) {
        this.prepareFeedbackItems = function(data) {
            return _.countBy(data.items, 'rating');
        };
    }

    angular
        .module('dashboard.feedbackItems')
        .service('FeedbackItemsService', FeedbackItemsService);
})();
;(function() {

    function FeedbackDetailsController(feedbackDetailsService) {
        this.service = feedbackDetailsService;

        var items = this.scopedItems;

        this.data = {
            filterItems: this.service.prepareFilterData(items),
            tableItems: items
        };

        this.applyFilter = function(value) {
            this.service.toggleFilter(this.data, value);
            this.service.toggleTable(this.data, items);
        };
    }

    angular
        .module('dashboard.feedbackDetails')
        .controller('FeedbackDetailsController', FeedbackDetailsController);
})();
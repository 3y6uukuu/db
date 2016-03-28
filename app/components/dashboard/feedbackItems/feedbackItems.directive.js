;(function() {

    function feedbackItemsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/dashboard/feedbackItems/feedbackItems.view.html',
            controller: 'FeedbackItemsController',
            controllerAs: 'feedbackItemsCtrl',
            bindToController: true,
            scope: {
                scopedItems: '=items'
            }
        };
    }

    angular
        .module('dashboard.feedbackItems')
        .directive('feedbackItems', feedbackItemsDirective);
})();
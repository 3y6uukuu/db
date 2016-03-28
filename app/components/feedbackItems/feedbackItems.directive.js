;(function() {

    function feedbackItemsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/feedbackItems/feedbackItems.view.html',
            controller: 'FeedbackItemsController',
            controllerAs: 'feedbackItemsCtrl'
        };
    }

    angular
        .module('dashboard.feedbackItems')
        .directive('feedbackItems', feedbackItemsDirective);
})();
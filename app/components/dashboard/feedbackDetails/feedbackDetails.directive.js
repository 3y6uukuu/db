;(function() {

    function feedbackDetailsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/dashboard/feedbackDetails/feedbackDetails.view.html',
            controller: 'FeedbackDetailsController',
            controllerAs: 'feedbackDetailsCtrl',
            bindToController: true,
            scope: {
                scopedItems: '=items'
            }
        };
    }
    
    angular
        .module('dashboard.feedbackDetails')
        .directive('feedbackDetails', feedbackDetailsDirective);
})();
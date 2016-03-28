;(function() {

    function feedbackDetailsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/feedbackDetails/feedbackDetails.view.html',
            controller: 'FeedbackDetailsController',
            controllerAs: 'feedbackDetailsCtrl'
        };
    }
    
    angular
        .module('dashboard.feedbackDetails')
        .directive('feedbackDetails', feedbackDetailsDirective);
})();
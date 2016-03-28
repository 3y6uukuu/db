;(function() {

    function feedbackDetailsFilterDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/feedbackDetails/ratingsDetailsFilter/ratingsDetailsFilter.view.html',
            scope: {
                scopedFilterItems: '=filterItems',
                handler: '&onFilterToggle'
            }
        };
    }

    angular
        .module('dashboard.feedbackDetailsFilter')
        .directive('feedbackDetailsFilter', feedbackDetailsFilterDirective);
})();
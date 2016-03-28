;(function() {

    function feedbackDetailsTableDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/dashboard/feedbackDetails/feedbackDetailsTable/feedbackDetailsTable.view.html',
            scope: {
                scopedItems: '=tableItems'
            }
        };
    }

    angular
        .module('dashboard.feedbackDetailsTable')
        .directive('feedbackDetailsTable', feedbackDetailsTableDirective);
})();
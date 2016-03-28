;(function() {

    function feedbackDetailsSearchDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/dashboard/feedbackDetails/ratingsDetailsSearch/ratingsDetailsSearch.view.html',
            scope: {
                scopedSearchItems: '=searchItems',
                handler: '&onSearch'
            }
        };
    }

    angular
        .module('dashboard.feedbackDetailsSearch')
        .directive('feedbackDetailsSearch', feedbackDetailsSearchDirective);
})();
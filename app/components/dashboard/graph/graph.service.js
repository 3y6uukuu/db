;(function() {

    function graphService(_, moment, DATE_FORMAT) {
        this.sortByCreationDate = function(items) {
            var prop = 'creation_date';

            return _.sortBy(items, prop);
        };

        this.groupeByDay = function(items) {
            return _.groupBy(items, function(item) {
                return moment.unix(item.creation_date).startOf('day').format(DATE_FORMAT);
            });
        };

        function getAverageFromArray(arr) {
            return _.reduce(arr, function(previous, current) {
                return previous + current;
            }, 0) / (arr.length === 0 ? 1 : arr.length);
        }

        this.prepareData = function(data, groupedByDay) {
            _.each(groupedByDay, function(value, key) {
                data.xAxisLabels.push(key);

                var prop = 'rating';
                var ratingsPerDay = _.pluck(value, prop);
                var averageDayRating = getAverageFromArray(ratingsPerDay).toFixed(2);

                data.yAxisLabels[0].push(averageDayRating);
            });
        };
    }

    angular
        .module('dashboard.graph')
        .constant('DATE_FORMAT', 'DD MMM')
        .service('graphService', graphService);
})();
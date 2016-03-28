;(function() {
    
    function FeedbackDetailsService(_) {
        this.prepareFilterData = function(data) {
            var prop = 'rating';
            var uniqRatings = _.uniq(data.items, prop);
            var ratingsValues = _.pluck(uniqRatings, prop);

            return _.map(ratingsValues, function(item) {
                var tempObject = {};

                tempObject[prop] = item;
                tempObject.checked = true;

                return tempObject;
            });
        };

        this.toggleFilter = function(data, value) {
            var prop = 'rating';

            _.each(data.filterItems, function(item) {
                if (item[prop] === value) {
                    item.checked = !item.checked;
                }
            });
        };

        this.toggleTable = function(data) {
            var tempObject = {checked: false};
            var toggledItems = _.where(data.filterItems, tempObject);

            data.tableItems = data.items;

            _.each(toggledItems, function(item) {
                var prop = 'rating';
                var tempObject = {};

                tempObject[prop] = item[prop];

                data.tableItems = _.reject(data.tableItems, tempObject);
            }.bind(this));
        };
    }
    
    angular
        .module('dashboard.feedbackDetails')
        .service('FeedbackDetailsService', FeedbackDetailsService);
})();
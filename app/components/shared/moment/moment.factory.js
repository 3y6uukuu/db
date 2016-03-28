;(function() {
    function moment(LOCALE) {
        window.moment.locale(LOCALE);

        return window.moment;
    }

    angular
        .module('shared.moment')
        .constant('LOCALE', 'nl')
        .factory('moment', moment);
})();

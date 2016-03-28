;(function() {
    function _($window) {
        return $window._;
    }

    angular
        .module('shared._')
        .factory('_', _);
})();
